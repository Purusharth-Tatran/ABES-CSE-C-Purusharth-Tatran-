import React, { useState, useEffect } from 'react';
import { mockMovies } from '../mockData';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Select a random movie from trending for the banner
    const trendingMovies = mockMovies.trending;
    const randomMovie = trendingMovies[Math.floor(Math.random() * trendingMovies.length)];
    setMovie(randomMovie);
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${movie.backdrop}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
