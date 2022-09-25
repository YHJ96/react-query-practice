/*
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAnimal = () => axios.get('/animal');
const fetchTrainer = () => axios.get('/trainer');

// 데이터 병렬처리 방법 구조 분해 할당의 rename을 정의하여 사용한다.

function Test() {
  const { data: animal } = useQuery(['animal'], fetchAnimal);
  const { data: trainer } = useQuery(['trainer'], fetchTrainer);
  console.log(animal, trainer);
  return <div>데이터 병렬 처리 data 네이밍 방법</div>;
}

export default Test;
*/

import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
const query = [1, 2];

const fetchAnimal = (id) => axios.get(`/animal/${id}`);

function ReactUseQueries() {
  const queries = query.map((item) => {
    return {
      queryKey: ['animal', item],
      queryFn: () => fetchAnimal(item),
    };
  });

  // 배열로 쿼리를 저장
  const result = useQueries({ queries });

  const createItem = () => {
    // 최종 결과를 담을 배열 선언
    const render = [];
    // forEach를 사용해서 쿼리 순회
    for (const query of result) {
      // 예외 처리를 해야한다.
      const { isLoading, data } = query;
      if (isLoading) return <div>로딩중</div>;
      render.push(<div key={data?.data.id}>{data?.data.name}</div>);
    }
    return render;
  };

  return <div>{createItem()}</div>;
}

export default ReactUseQueries;
