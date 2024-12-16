import { useState, useRef, useMemo, useCallback } from 'react';

import { searchMovies } from '../../services/movies';

import { IsLoadingState, MoviesStatus, MoviesState } from './useMovies.types';

const useMovies = ({ sortMovies }: { sortMovies: boolean }) => {
  const [isLoading, setIsLoading]: IsLoadingState = useState<boolean>(false);
  const [movies, setMovies]: MoviesState = useState<MoviesStatus>([]);
  const prevSearch = useRef<string>('');

  const getMovies = useCallback(async ({ search }: { search: string }) => {
    // Prevent the same search from being done twice in a row
    if (prevSearch.current === search) return;

    try {
      setIsLoading(true);
      prevSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    if (!movies) return;

    return sortMovies
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sortMovies, movies]);

  return { movies: sortedMovies, getMovies, isLoading };
};

export default useMovies;
