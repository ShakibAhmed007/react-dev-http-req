import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const UseQueryExample = () => {
  const { refetch, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  );
  useEffect(() => {
    console.log('Use Effect Hooks !!!');
    refetch();
  }, []);

  console.log('data ---', data);
  return <div>Use Query Component Works !!!</div>;
};

export default UseQueryExample;
