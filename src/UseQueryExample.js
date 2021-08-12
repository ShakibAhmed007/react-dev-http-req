import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const fetchMovies = () => {
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
      res => {
        const data = res.json();
        const dataArr = [];
        for (const key in data) {
          dataArr.push({
            id: data[key].id,
            title: data[key].title
          });
        }
        console.log('data ---', dataArr);
        return res.json();
      }
    );
  };

  const { isLoading, isError, data, error } = useQuery('repoData', fetchMovies);

  // console.log(isLoading, isError, data, error);
  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
