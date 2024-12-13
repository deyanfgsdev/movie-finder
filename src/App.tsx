import { useState } from 'react';

import './App.scss';

import { SortMoviesState } from './App.types';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import useMovies from './hooks/useMovies/useMovies';

const App = () => {
  const [sortMovies, setSortMovies]: SortMoviesState = useState<boolean>(false);
  const { movies, getMovies, isLoading } = useMovies({ sortMovies });

  const checkSortMovies = ({ newSortMovies }: { newSortMovies: boolean }) => {
    setSortMovies(newSortMovies);
  };

  return (
    <div className="movie-finder-app">
      <Header getMovies={getMovies} checkSortMovies={checkSortMovies} />
      <Main movies={movies} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default App;
