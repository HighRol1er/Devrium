'use client';

import { likePost } from '@/_api/likePost/likePost';
import { useProfileStore } from '@/store/profile/profileStore';
import { MessageSquareMore, Share, ThumbsUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
interface PostStatsProps {
  statCount: {
    comments: number;
    likes: number;
  };
}

export default function PostStats({ statCount }: PostStatsProps) {
  const pathname = usePathname();
  const postId = pathname.split('/').pop();

  const profile = useProfileStore((state) => state.profile);
  const userId = profile.userId;

  const onClickLikePost = async () => {
    if (!userId || !postId) {
      console.error('userId or postId undefined');
      return;
    }
    const response = await likePost(userId, postId);
    console.log(response);
  };

  return (
    <div className="mb-2 flex space-x-4 text-sm text-gray-400">
      <button
        onClick={onClickLikePost}
        className="flex gap-1 hover:text-blue-500"
      >
        <ThumbsUp className="size-4" />
        <p>{statCount?.likes}</p>
      </button>
      <button className="flex gap-1 hover:text-blue-500">
        <MessageSquareMore className="size-4" />
        <p>{statCount?.comments}</p>
      </button>
      <button className="flex gap-1 hover:text-blue-500">
        <Share className="size-4" />
        <p>Share</p>
      </button>
    </div>
  );
}
