import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = async () => {
  const fetchMovieHandler = async () => {
    const response = await fetch(
      'https://dev-http-default-rtdb.firebaseio.com/test_data.json'
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    const dataArr = [];
    for (const key in data) {
      dataArr.push({
        id: data[key].id,
        title: data[key].title
      });
    }
    console.log(dataArr);
  };

  // const { isLoading, isError, data, error } = useQuery('repoData', fetchMovies);

  useEffect(() => {
    fetchMovies();
  }, []);

  // console.log(isLoading, isError, data, error);
  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
