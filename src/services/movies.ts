import { RequestUrl, OMDBResponse } from './movies.type';

const OMDB_API_URL_PREFIX = 'https://www.omdbapi.com/?apikey=';
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = ({ search }: { search: string }) => {
  if (search === '') return null;

  const REQUEST_URL: RequestUrl = `${OMDB_API_URL_PREFIX}${OMDB_API_KEY}&s=${search}`;

  return fetch(REQUEST_URL)
    .then((response) => {
      if (!response.ok) throw new Error('Failed to fetch movies search');

      return response.json();
    })
    .then((data: OMDBResponse) => {
      const { Search: movies } = data;

      const mappedMovies = movies?.map((movie) => {
        const { imdbID, Title, Year, Poster } = movie;

        return {
          id: imdbID,
          title: Title,
          year: Year,
          poster: Poster,
        };
      });

      return mappedMovies;
    })
    .catch((error) => {
      console.error(error.message);
    });
};
