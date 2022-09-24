import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchAnimal = () => axios.get('/animal');

function ReactQuery() {
  /* cacheTime뒤에 가비지 컬렉터을 사용해서 제거 */
  /* staleTime뒤에 fetch 네트워크에 fetch 요청 전송 */
  /* refetch로 클릭이벤트 활용 가능  */
  /* onSuccess, onError 콜백함수 활용 가능  */

  const onSuccess = () => console.log('OnSucess');

  const onError = () => console.log('OnError');

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ['animal'],
    fetchAnimal,
    { enabled: false, onSuccess, onError },
  );

  if (isLoading && isFetching) return <div>Loding</div>;

  if (isError) {
    return <div>{error.message}</div>;
  }

  const createData = () => {
    return data?.data.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  };

  return (
    <React.Fragment>
      <button onClick={refetch}>클릭</button>
      {createData()}
    </React.Fragment>
  );
}

export default ReactQuery;
