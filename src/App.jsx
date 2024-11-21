import { useState } from 'react'

import moviesResults from './mocks/movies-results.json'

import './App.scss'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovies = ({ search }) => {
    const newMovies = moviesResults.Search

    setMovies(newMovies)
  }

  return (
    <div className='movie-finder-app'>
      <Header getMovies={getMovies} />
      <Main movies={movies} />
    </div>
  )
}

export default App
