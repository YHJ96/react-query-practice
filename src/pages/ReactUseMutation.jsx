import React from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchStudent = () => axios.get('/student');
const addStudent = (data) => axios.post('/student', data);

function ReactUseMutation() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['students'], fetchStudent);
  // useMutation 이벤트 발생후 query 다시 가져오기
  const { mutate } = useMutation(addStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries(['students']);
    },
  });
  if (isLoading) return <div>Loding...</div>;

  const createList = () => {
    return data?.data.map((item) => {
      return (
        <li key={item.id}>
          <div>{item.name}</div>
          <div>{item.age}</div>
        </li>
      );
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, age } = e.target;
    mutate({ name: name.value, age: age.value });
    e.target.reset();
  };

  return (
    <>
      {createList()}
      <form onSubmit={handleOnSubmit}>
        <input name="name" placeholder="이름을 입력하세요." />
        <input name="age" placeholder="나이를 입력하세요" type="number" />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default ReactUseMutation;
