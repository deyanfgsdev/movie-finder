const OMDB_API_URL_PREFIX = 'https://www.omdbapi.com/?apikey='
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const searchMovies = ({ search }) => {
  if (search === '') return null

  const REQUEST_URL = `${OMDB_API_URL_PREFIX}${OMDB_API_KEY}&s=${search}`

  return fetch(REQUEST_URL)
    .then((response) => {
      if (!response.ok) throw new Error('Failed to fetch movies search')

      return response.json()
    }).then((data) => {
      const { Search: movies } = data

      const mappedMovies = movies?.map((movie) => {
        const { imdbID, Title, Year, Poster } = movie

        return {
          id: imdbID,
          title: Title,
          year: Year,
          poster: Poster
        }
      })

      return mappedMovies
    }).catch((error) => {
      console.error(error.message)
    })
}
