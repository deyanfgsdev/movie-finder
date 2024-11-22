import { useState } from 'react'

import './App.scss'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

const OMDB_API_URL_PREFIX = 'http://www.omdbapi.com/?apikey='
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovies = ({ search }) => {
    fetch(`${OMDB_API_URL_PREFIX}${OMDB_API_KEY}&s=${search}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch movies search')

        return response.json()
      }).then((data) => {
        const newMovies = data.Search
        setMovies(newMovies)
      }).catch((error) => {
        console.error(error.message)
      })
  }

  return (
    <div className='movie-finder-app'>
      <Header getMovies={getMovies} />
      <Main movies={movies} />
    </div>
  )
}

export default App
