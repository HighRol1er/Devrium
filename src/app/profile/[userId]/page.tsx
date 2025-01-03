'use client';

import MyCommentCard from '@/components/profile/MyCommentCard';
import MyPost from '@/components/profile/MyPost';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileSkeleton from '@/components/profile/skeleton/ProfileSkeleton';
import { useGetMyProfile } from '@/services/profile/queries/useGetMyProfile';
import { useProfileCategoryStore } from '@/store/profileCategory/useProfileStore';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const params = useParams<{ userId: string }>();
  const { data, isLoading, isError } = useGetMyProfile(params.userId);

  const { category } = useProfileCategoryStore();
  console.log(data);
  useEffect(() => {
    console.log(category); // 상태 변경 시 출력
  }, [category]);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!data) {
    return <div>data not exist</div>;
  }

  return (
    <>
      <div className="flex min-h-screen justify-center gap-2 pr-2">
        <div className="w-full border-r bg-muted/40 p-6 shadow-md">
          <ProfileCard data={data} />
          {category === 'posts' &&
            data?.posts.map((post: any) => (
              <MyPost key={post.id} post={post} />
            ))}
          {category === 'comments' &&
            data.comments.map((comment) => (
              <MyCommentCard key={comment.id} comment={comment} />
            ))}
          {category === 'bookmark' && <div>bookmark </div>}
        </div>
        <ProfileSidebar data={data} />
      </div>
    </>
  );
}
