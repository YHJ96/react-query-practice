import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAnimal = () => axios.get('/animal');
const fetchTrainer = () => axios.get('/trainer');

// 데이터 병렬처리 방법 구조 분해 할당의 rename을 정의하여 사용한다.
function Test1() {
  const { data: animal } = useQuery(['animal'], fetchAnimal);
  const { data: trainer } = useQuery(['trainer'], fetchTrainer);
  console.log(animal, trainer);
  return <div>데이터 병렬 처리 data 네이밍 방법</div>;
}

export default Test1;
