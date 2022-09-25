import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Query id를 이용해서 Detail 페이지 작성 완료
// queryKey로 지정한 쿼리를 가져올 수 있다.
const fetchAnimal = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`/animal/${id}`);
};

function ReactQueryDetail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ['animal', id],
    fetchAnimal,
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const createInfo = () => {
    const { id, name, count } = data?.data;
    return (
      <div key={id}>
        <div>{name}</div>
        <div>{count}</div>
      </div>
    );
  };

  return <div>{createInfo()}</div>;
}

export default ReactQueryDetail;
