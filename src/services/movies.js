const OMDB_API_URL_PREFIX = 'http://www.omdbapi.com/?apikey='
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const searchMovies = ({ search }) => {
  return fetch(`${OMDB_API_URL_PREFIX}${OMDB_API_KEY}&s=${search}`)
    .then((response) => {
      if (!response.ok) throw new Error('Failed to fetch movies search')

      return response.json()
    }).then((data) => {
      const movies = data.Search

      return movies
    }).catch((error) => {
      console.error(error.message)
    })
}
