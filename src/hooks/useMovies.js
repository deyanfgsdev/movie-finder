import { useState } from 'react'

import { searchMovies } from '../services/movies'

const useMovies = ({ sortMovies }) => {
  const [movies, setMovies] = useState([])

  const getMovies = async ({ search }) => {
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  const sortedMovies = sortMovies ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  return { movies: sortedMovies, getMovies }
}

export default useMovies
