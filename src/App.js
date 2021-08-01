import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [movies, setMovies] = useState([]);

  // req
  async function fetchMovieHandler() {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const transformedData = data.results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title
      };
    });
    setMovies(transformedData);
  }

  return (
    <div>
      <h1>React Http Requests</h1>
      <button onClick={fetchMovieHandler}> Fetch Movies </button>
      {movies.map(movie => {
        return (
          <div>
            <div>{movie.id}</div>
            <div>{movie.title}</div>
          </div>
        );
      })}
    </div>
  );
}
