import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface IButtonGroupProps {
  userId: string;
}

export default async function ButtonGroup({ userId }: IButtonGroupProps) {
  return (
    <>
      <Link href={`/myprofile/${userId}`}>
        <Button
          variant="ghost"
          className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
        >
          Posts
        </Button>
      </Link>
      <Link href={`/myprofile/${userId}`}></Link>
      <Button
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Comments
        <Link href={`/myprofile/${userId}`}></Link>
      </Button>
      <Button
        variant="ghost"
        className="font-semibold hover:underline hover:decoration-primary hover:decoration-2"
      >
        Bookmark
      </Button>
    </>
  );
}
