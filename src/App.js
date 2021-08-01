import React, { useState } from 'react';
import './style.css';

export default function App() {
  // movies state
  const [movies, setMovies] = useState([]);

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // req
  async function fetchMovieHandler() {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const transformedData = data.results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title
      };
    });
    setMovies(transformedData);
    setIsLoading(false);
  }

  let data = <p>Loading .... </p>;
  if (!isLoading) {
    data = movies.map(movie => {
      return (
        <div>
          <div>{movie.id}</div>
          <div>{movie.title}</div>
        </div>
      );
    });
  }

  return (
    <div>
      <h1>React Http Requests</h1>
      <button onClick={fetchMovieHandler}> Fetch Movies </button>
      {data}
    </div>
  );
}
