import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function App() {
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
      const response = await fetch('https://swapi.dev/api/films/');
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
      <h1>React Http Requests</h1>
      <button onClick={fetchMovieHandler}> Fetch Movies </button>
      {data}
    </div>
  );
}
