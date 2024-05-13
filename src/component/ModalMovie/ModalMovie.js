// src/components/ModalMovie/ModalMovie.js
import React, { useState } from 'react';
import axios from 'axios';

function ModalMovie({ movie, setShowModal }) {
    const [comment, setComment] = useState('');

    const handleAddToDatabase = () => {
        axios.post('/addMovie', {
            ...movie,
            comment
        }).then(() => {
            setShowModal(false);
        }).catch(error => {
            console.error('Error adding movie to database:', error);
        });
    };

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Add a comment"></textarea>
            <button onClick={handleAddToDatabase}>Add to Favorites</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
    );
}

export default ModalMovie;
