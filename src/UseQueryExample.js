import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const { refetch, isLoading, error, data } = useQuery('', () => {});

  // const getData = () => {

  //     const { isLoading, error, data } = useQuery(
  //       'repoData',
  //       fetch(
  //         'https://dev-http-default-rtdb.firebaseio.com/test_data.json'
  //       ).then(res => {
  //         console.log('use Query Response', res);
  //       })
  //     );

  // };

  useEffect(() => {
    console.log('Use Effect Hooks !!!');
    // getData();
    refetch();
  }, []);

  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
