import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST() {
  const aiUser = await prisma.user.upsert({
    where: { email: 'ai-assistant@example.com' },
    update: {},
    create: {
      id: 'DEVRIUMAI',
      name: 'AI Assistant',
      email: 'ai-assistant@example.com',
    },
  });

  return NextResponse.json({ user: aiUser });
}
