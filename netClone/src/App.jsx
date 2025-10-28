import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Row from './components/Row';
import { mockMovies } from './mockData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row title="Trending Now" movies={mockMovies.trending} />
      <Row title="Netflix Originals" movies={mockMovies.netflixOriginals} />
      <Row title="Action Movies" movies={mockMovies.actionMovies} />
      <Row title="Comedy Movies" movies={mockMovies.comedyMovies} />
    </div>
  );
}

export default App;
