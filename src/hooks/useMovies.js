import { useState, useMemo } from 'react'

import { searchMovies } from '../services/movies'

const useMovies = ({ sortMovies }) => {
  const [movies, setMovies] = useState([])

  const getMovies = async ({ search }) => {
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  }

  const sortedMovies = useMemo(() => {
    if (!movies) return

    return sortMovies ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sortMovies, movies])

  return { movies: sortedMovies, getMovies }
}

export default useMovies
