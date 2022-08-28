import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchAnimal = () => axios.get('/animal');

function ReactQuery() {
  const { data, isLoading, isError, error } = useQuery(['animal'], fetchAnimal);

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
