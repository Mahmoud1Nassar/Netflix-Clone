import React, { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie.js";
import "./Movie.css";

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToFavorites = () => {
    setShowModal(true);
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
      {showModal && (
        <ModalMovie movie={movie} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Movie;
