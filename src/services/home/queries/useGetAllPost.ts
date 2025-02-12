import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllPosts } from '../getAllPosts';

/** Query key */
export const POSTS = 'posts';

export const useGetAllPost = (categoryId?: number) => {
  return useInfiniteQuery({
    queryKey: [POSTS, categoryId], //categoryId가 동적으로 들어오면 -> route.ts(app/api/post/route.ts) 참고!
    queryFn: ({ pageParam = 1 }) => getAllPosts(categoryId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalCount } = lastPage;
      return currentPage < totalCount ? currentPage + 1 : undefined;
    },
  });
};
