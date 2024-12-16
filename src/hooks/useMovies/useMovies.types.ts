export type IsLoadingState = [boolean, (newIsLoading: boolean) => void];
export interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}
export type MoviesStatus = null | Movie[] | undefined;
export type MoviesState = [MoviesStatus, (newMovies: MoviesStatus) => void];
