import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

function ModalMovie({ movie, onClose }) {
  const [comment, setComment] = useState("");

  const handleAddMovie = () => {
    axios
      .post("https://movies-library-rop2.onrender.com/addMovie", {
        ...movie,
        comment,
      })
      .then((response) => {
        console.log("Movie added to favorites", response.data);
        onClose();
      })
      .catch((error) => {
        console.error("There was an error adding the movie!", error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button onClick={handleAddMovie}>Add to Favorites</button>
      </div>
    </div>
  );
}

export default ModalMovie;
