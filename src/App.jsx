import './App.scss'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import useMovies from './hooks/useMovies'

const App = () => {
  const { movies, getMovies } = useMovies()

  return (
    <div className='movie-finder-app'>
      <Header getMovies={getMovies} />
      <Main movies={movies} />
    </div>
  )
}

export default App
