import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchAnimals = async ({ pageParam = 1 }) => {
  const response = await axios.get(`/animal/${pageParam}`);
  return response;
};

// 인피니티 쿼리 확인 완료
// 무한스크롤 만들기 도전해보기

function ReactUseInfiniteQuery() {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['pageAnimals'], fetchAnimals, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 3) return pages.length + 1;
      return undefined;
    },
  });
  console.log(data);

  if (isLoading) return <div>Loding...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <React.Fragment>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load
      </button>
      {isFetching && !isFetchingNextPage ? <div>'Load...'</div> : null}
    </React.Fragment>
  );
}

export default ReactUseInfiniteQuery;
