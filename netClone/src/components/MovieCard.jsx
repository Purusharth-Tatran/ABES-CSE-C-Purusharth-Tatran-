import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <img
        src={movie.poster}
        alt={movie.title}
        className="movieCard__poster"
      />
      <div className="movieCard__info">
        <h3 className="movieCard__title">{movie.title}</h3>
        <div className="movieCard__rating">⭐ {movie.rating}</div>
      </div>
    </div>
  );
};

export default MovieCard;
