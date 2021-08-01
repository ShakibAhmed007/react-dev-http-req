import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const transformedData = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title
          };
        });
        setMovies(transformedData);
      })
      .catch();
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
