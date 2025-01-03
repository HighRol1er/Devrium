import {
  User,
  Post,
  Comment,
  Follow,
  Category,
  Like,
  Saved,
} from '@prisma/client';

export interface IUser extends User {
  name: string;
  follower: Follow[];
  following: Follow[];
  posts: Post[];
  comments: Comment[];
  follows: Follow[];
  categories: Category[];
  likes: Like[];
  saved: Saved[];
  _count: {
    comments: number;
    posts: number;
  };
}
