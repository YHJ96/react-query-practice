import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchAnimal = () => axios.get('/animal');

function ReactQuery() {
  /* cacheTime뒤에 가비지 컬렉터을 사용해서 제거 */
  /* staleTime뒤에 fetch 네트워크에 fetch 요청 전송 */
  const { data, isLoading, isError, error } = useQuery(
    ['animal'],
    fetchAnimal,
    { cacheTime: 5000, staleTime: 30000 },
  );

  if (isLoading) return <div>Loding</div>;

  if (isError) {
    return <div>{error.message}</div>;
  }

  const createData = () => {
    return data?.data.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  };

  return <React.Fragment>{createData()}</React.Fragment>;
}

export default ReactQuery;
