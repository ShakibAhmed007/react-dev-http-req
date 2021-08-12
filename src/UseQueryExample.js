import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const fetchMovieHandler = async () => {
    const response = await fetch(
      'https://dev-http-default-rtdb.firebaseio.com/test_data.json'
    );
    const data = await response.json();
    console.log(data);
  };

  const { isLoading, isError, data, error } = useQuery(
    'repoData',
    fetchMovieHandler
  );

  // console.log(isLoading, isError, data, error);
  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
