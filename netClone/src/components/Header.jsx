import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__contents">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <nav className="header__nav">
          <a href="#home" className="header__link">Home</a>
          <a href="#tvshows" className="header__link">TV Shows</a>
          <a href="#movies" className="header__link">Movies</a>
          <a href="#new" className="header__link">New & Popular</a>
          <a href="#mylist" className="header__link">My List</a>
        </nav>
        <div className="header__right">
          <button className="header__search">🔍</button>
          <button className="header__profile">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
