import { IUser } from '@/types/user';
import { PenLine, User } from 'lucide-react';
import ButtonGroup from './ButtonGroup';
import FollowBtn from './FollowBtn';
import { useSession } from 'next-auth/react';

interface ProfileCardProps {
  data: IUser;
}

export default function ProfileCard({ data }: ProfileCardProps) {
  const session = useSession();

  return (
    <>
      <div className="mb-6 flex items-center gap-4">
        {!data.image ? (
          <User className="size-16" />
        ) : (
          <img
            src={data.image}
            alt="profile image"
            className="w-16 rounded-full"
          />
        )}

        <div>
          <h1 className="flex items-center text-2xl font-bold">
            {data.name}
            {data.id === session.data?.user.id && (
              <PenLine className="ml-4 mt-2 size-5 hover:text-red-400" />
            )}
          </h1>
          <p className="text-sm">@{data.tagName}</p>
        </div>
      </div>
      <div className="ml-4 flex items-center gap-2">
        <div className="flex gap-2 text-sm font-semibold opacity-50">
          <div>Follwers {data.follower.length}</div>
          <div>Follwing {data.following.length}</div>
        </div>
        {data.id !== session.data?.user.id && (
          <FollowBtn userId={data.id} followerList={data.follower} />
        )}
      </div>
      <div className="mb-6 rounded-lg border-b p-4">
        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
        <div className="flex gap-4">
          <ButtonGroup userId={data.id} />
        </div>
      </div>
    </>
  );
}
