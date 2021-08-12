import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const fetchMovies = () => {
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
      res => {
        console.log('data ---', res);
        // return res.json();
      }
    );
  };

  // const { refetch, data } = useQuery('repoData', fetchMovies);

  useEffect(() => {
    console.log('Use Effect Hooks !!!');
    fetchMovies();
  }, []);

  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
