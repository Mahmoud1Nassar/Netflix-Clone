import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList.js';
import "../Home/Home.css"

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://movies-library-rop2.onrender.com/trending')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
