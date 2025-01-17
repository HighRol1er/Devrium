import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import openai from '@/lib/openai';

const prisma = new PrismaClient();

const THIRTY_MINUTES = 30 * 60 * 1000; // 30분

export async function GET() {
  // const now = new Date();
  // const threshold = new Date(now.getTime() - THIRTY_MINUTES);

  const unansweredPosts = await prisma.post.findMany({
    where: {
      category: { name: 'question' }, // 카테고리 이름이 'question'
      // createdAt: { lte: threshold },
      comments: { none: {} },
    },
    include: {
      category: true,
      comments: true,
    },
  });

  console.log('unansweredPosts', unansweredPosts);

  // 2. AI 답변 생성 및 저장
  for (const post of unansweredPosts) {
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          {
            role: 'user',
            content: `Please answer this question in detail:\n\n${post.content}`,
          },
        ],
        max_tokens: 50,
      });

      const aiAnswer = completion.choices[0]?.message?.content?.trim();

      console.log(`Generated AI Answer for Post ID ${post.id}:`, aiAnswer);

      if (aiAnswer) {
        await prisma.comment.create({
          data: {
            userId: 'DEVRIUMAI', // AI 사용자의 ID
            postId: post.id,
            content: aiAnswer,
          },
        });
      }
    } catch (error) {
      console.error(
        `Failed to generate AI response for post ID ${post.id}:`,
        error
      );
    }
  }

  return NextResponse.json({
    message: 'AI responses added successfully',
    unansweredPosts,
  });
}
