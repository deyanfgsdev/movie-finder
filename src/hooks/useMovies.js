import { useState, useRef, useMemo, useCallback } from 'react'

import { searchMovies } from '../services/movies'

const useMovies = ({ sortMovies }) => {
  const [movies, setMovies] = useState([])
  const prevSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    // Prevent the same search from being done twice in a row
    if (prevSearch.current === search) return

    try {
      prevSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (!movies) return

    return sortMovies ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sortMovies, movies])

  return { movies: sortedMovies, getMovies }
}

export default useMovies
