import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

const FirebaseExample = () => {
  // movies state
  const [movies, setMovies] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // error state
  const [error, setError] = useState(null);

  // req
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://dev-http-default-rtdb.firebaseio.com/test_data.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      const transformedData = data.results.map(movie => {
        return {
          id: movie.episode_id,
          title: movie.title
        };
      });
      setMovies(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // load data whenever component loads
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let data = <p>Loading .... </p>;
  if (!isLoading && error === null) {
    data = movies.map(movie => {
      return (
        <div>
          <div>{movie.id}</div>
          <div>{movie.title}</div>
        </div>
      );
    });
  } else if (error !== null) {
    data = <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={fetchMovieHandler}> Fetch Data </button>
      {data}
    </div>
  );
};

export default FirebaseExample;
