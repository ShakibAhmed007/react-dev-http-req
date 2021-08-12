import React, { useEffect } from 'react';

const UseQueryExample = () => {
  const getData = () => {
    try {
      const data = fetch(
        'https://dev-http-default-rtdb.firebaseio.com/test_data.json'
      ).then(res => {
        console.log(res);
      });
    } catch (error) {
      console.log('error ---', error);
    }
  };

  useEffect(() => {
    console.log('Use Effect Hooks !!!');
    getData();
  }, []);

  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
