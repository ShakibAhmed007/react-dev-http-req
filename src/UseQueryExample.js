import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const { refetch } = useQuery('repoData', () => {
    fetch('https://dev-http-default-rtdb.firebaseio.com/test_data.json')
      .then(res => {
        const data = res.json();
        const dataArr = [];
        for (const key in data) {
          dataArr.push({
            id: data[key].id,
            title: data[key].title
          });
        }
        console.log('use Query Response', dataArr);
      })
      .catch(error => {
        console.log(error);
      });
  });

  useEffect(() => {
    console.log('Use Effect Hooks !!!');
    refetch();
  }, []);

  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
