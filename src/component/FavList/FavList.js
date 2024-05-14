import React, { useEffect, useState } from "react";
import axios from "axios";
import "../FavList/FavList.css";

function FavList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("https://movies-library-rop2.onrender.com/getMovies")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the favorite movies!",
          error
        );
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://movies-library-rop2.onrender.com/deleteMovies/${id}`)
      .then(() => {
        setFavorites(favorites.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the movie!", error);
      });
  };

  const handleUpdate = (id, comment) => {
    axios
      .put(`https://movies-library-rop2.onrender.com/update/${id}`, { comment })
      .then((response) => {
        setFavorites(
          favorites.map((movie) =>
            movie.id === id
              ? { ...movie, comment: response.data.comment }
              : movie
          )
        );
      })
      .catch((error) => {
        console.error("There was an error updating the comment!", error);
      });
  };

  return (
    <div className="fav-list">
      <h1>Favorite Movies</h1>
      {favorites.map((movie) => (
        <div key={movie.id} className="fav-movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.comment}</p>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
          <button
            onClick={() => handleUpdate(movie.id, prompt("New comment:"))}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavList;
