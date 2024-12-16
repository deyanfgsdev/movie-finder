import { useRef } from 'react';

import Spinner from '../Spinner/Spinner';
import Movies from '../Movies/Movies';

import './Main.scss';

import { Movie } from '../../hooks/useMovies/useMovies.types';

const Main = ({
  movies,
  isLoading,
}: {
  movies: Movie[] | undefined;
  isLoading: boolean;
}) => {
  const isFirstRender = useRef<boolean>(true);
  const mainClassname = isLoading ? 'main main--loading' : 'main';

  if (isFirstRender.current) {
    isFirstRender.current = false;

    return;
  }

  return (
    <main className={mainClassname}>
      {isLoading ? <Spinner /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
