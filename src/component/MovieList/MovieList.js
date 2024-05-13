// src/components/MovieList/MovieList.js
import React from 'react';
import Movie from '../Movie/Movie.js';

function MovieList({ movies }) {
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
