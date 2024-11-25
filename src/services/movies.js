const OMDB_API_URL_PREFIX = 'http://www.omdbapi.com/?apikey='
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const searchMovies = ({ search }) => {
  const REQUEST_URL = `${OMDB_API_URL_PREFIX}${OMDB_API_KEY}&s=${search}`

  return fetch(REQUEST_URL)
    .then((response) => {
      if (!response.ok) throw new Error('Failed to fetch movies search')

      return response.json()
    }).then((data) => {
      const { Search: movies } = data

      if (movies?.length) {
        const mappedMovies = movies.map((movie) => {
          const { imdbID, Title, Year, Poster } = movie

          return {
            id: imdbID,
            title: Title,
            year: Year,
            poster: Poster
          }
        })

        return { movies: mappedMovies }
      }

      return { movies: [] }
    }).catch((error) => {
      console.error(error.message)
    })
}
