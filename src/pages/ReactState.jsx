import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReactState() {
  const [isLoding, setIsLoding] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/animal')
      .then((res) => {
        setData(res.data);
        setIsLoding(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoding(false);
      });
  }, []);

  if (isLoding) return <div>Loding</div>;

  if (error) return <div>{error}</div>;

  const createData = () => {
    return data.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  };

  return <React.Fragment>{createData()}</React.Fragment>;
}

export default ReactState;
