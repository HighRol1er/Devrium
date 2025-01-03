import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

/** Remove a post from user's saved posts (remove bookmark)
 * Endpoint: DELETE /api/user/[userId]/saved-posts/[postId]
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string; postId: string } }
) {
  const { userId, postId } = params;

  try {
    // 게시글 북마크 삭제
    await prisma.saved.deleteMany({
      where: {
        userId,
        postId: Number(postId),
      },
    });

    return NextResponse.json(
      { message: 'Bookmark removed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error removing bookmark:', error);
    return NextResponse.json(
      { error: 'Failed to remove bookmark' },
      { status: 500 }
    );
  }
}
