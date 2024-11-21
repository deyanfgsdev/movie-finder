import { useState, useEffect, useRef } from 'react'

import './Movies.scss'

const MoviesList = ({ movies }) => {
  const [titleHeight, setTitleHeight] = useState()
  const moviesListRef = useRef(null)

  const mappedMovies = movies.map((movie) => {
    const { imdbID, Title, Year, Poster } = movie

    return {
      id: imdbID,
      title: Title,
      year: Year,
      poster: Poster
    }
  })

  useEffect(() => {
    const calculateTitlesMaxHeight = () => {
      const moviesList = moviesListRef.current
      const moviesItems = [...moviesList.querySelectorAll('.movie')]
      const titlesHeights = moviesItems.map((movieElem) => {
        const titleElem = movieElem.querySelector('.movie__title')
        const { offsetHeight } = titleElem
        return offsetHeight
      })

      return Math.max(...titlesHeights)
    }

    const titlesNewMaxHeight = calculateTitlesMaxHeight()
    setTitleHeight(`${titlesNewMaxHeight}px`)
  }, [movies])

  return (
    <ul className='movies-list' ref={moviesListRef}>
      {mappedMovies.map((movie) => {
        const { id, title, year, poster } = movie

        return (
          <li key={id} className='movie'>
            <img src={poster} alt={title} className='movie__poster' />
            <div className='movie__info'>
              <h3 className='movie__title' style={{ height: titleHeight || 'auto' }}>{title}</h3>
              <p className='movie__year'>Year: {year}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const NoMoviesResults = () => {
  return (<p className='main__movies-no-results'>No movies results</p>)
}

const Movies = ({ isFirstRender, movies }) => {
  if (isFirstRender) return

  return (
    <div className='main__movies'>
      {movies?.length ? <MoviesList movies={movies} /> : <NoMoviesResults />}
    </div>
  )
}

export default Movies
