import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';

const Movie = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAddToFavorites = () => {
        setShowModal(true);
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
            {showModal && <ModalMovie movie={movie} setShowModal={setShowModal} />}
        </div>
    );
};

export default Movie;
