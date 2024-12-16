type OmdbApiUrlPrefix = 'https://www.omdbapi.com/?apikey=';
export type RequestUrl = `${OmdbApiUrlPrefix}${string}&s=${string}`;

/* OMDb API */

export interface OMDBResponse {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Movie = 'movie',
  Series = 'series',
}
