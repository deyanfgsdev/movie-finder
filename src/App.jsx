import { useState } from 'react'

import './App.scss'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import useMovies from './hooks/useMovies'

const App = () => {
  const [sortMovies, setSortMovies] = useState(false)
  const { movies, getMovies } = useMovies({ sortMovies })

  const checkSortMovies = ({ newSortMovies }) => {
    setSortMovies(newSortMovies)
  }

  return (
    <div className='movie-finder-app'>
      <Header getMovies={getMovies} checkSortMovies={checkSortMovies} />
      <Main movies={movies} />
    </div>
  )
}

export default App
