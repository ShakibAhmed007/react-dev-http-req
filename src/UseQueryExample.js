import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const UseQueryExample = () => {
  const fetchMovieHandler = () => {
    const response = axios
      .get('https://dev-http-default-rtdb.firebaseio.com/test_data.json')
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { isLoading, isError, data, error } = useQuery(
    ['repoData'],
    fetchMovieHandler
  );
  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
