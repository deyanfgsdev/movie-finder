import { useState, useEffect, useRef } from 'react';

import './Movies.scss';

import { Movie } from '../../hooks/useMovies/useMovies.types';
import { TitleMaxHeightState } from './Movies.types';

const MoviesList = ({ movies }: { movies: Movie[] }) => {
  const [titleMaxHeight, setTitleMaxHeight]: TitleMaxHeightState =
    useState<number>(0);
  const moviesListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const calculateTitlesMaxHeight = () => {
      const moviesList = moviesListRef.current;

      if (!moviesList) return 0;

      const moviesItems = [...moviesList.querySelectorAll('.movie')];
      const titlesHeights = moviesItems.map((movieElem) => {
        const titleElem = movieElem.querySelector('.movie-info__title');

        if (!titleElem) return 0;
        if (!(titleElem instanceof HTMLElement)) return 0;

        const { offsetHeight } = titleElem;

        return offsetHeight;
      });

      return Math.max(...titlesHeights);
    };

    if (moviesListRef.current) {
      const titleNewMaxHeight = calculateTitlesMaxHeight();
      setTitleMaxHeight(titleNewMaxHeight);
    }
  }, [movies]);

  return (
    <ul className="movies-list" ref={moviesListRef}>
      {movies.map((movie) => {
        const { id, title, year, poster } = movie;

        return (
          <li key={id} className="movie">
            <img src={poster} alt={title} className="movie__poster" />
            <div className="movie-info">
              <h3
                className="movie-info__title"
                style={{
                  height: titleMaxHeight > 0 ? `${titleMaxHeight}px` : 'auto',
                }}
              >
                {title}
              </h3>
              <p className="movie-info__year">Year: {year}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const NoMoviesResults = () => {
  return <p className="main__movies-no-results">No movies results</p>;
};

const Movies = ({ movies }: { movies: Movie[] | undefined }) => {
  return (
    <div className="main__movies">
      {movies?.length ? <MoviesList movies={movies} /> : <NoMoviesResults />}
    </div>
  );
};

export default Movies;
