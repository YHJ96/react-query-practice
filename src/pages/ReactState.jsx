import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReactState() {
  const [isLoding, setIsLoding] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/animal').then((res) => {
      setData(res.data);
      setIsLoding(false);
    });
  }, []);

  if (isLoding) return <div>Loding</div>;

  const createData = () => {
    return data.map((item) => {
      return <div key={item.id}>{item.name}</div>;
    });
  };

  return <React.Fragment>{createData()}</React.Fragment>;
}

export default ReactState;
