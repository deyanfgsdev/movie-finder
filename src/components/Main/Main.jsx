import { useRef } from 'react'

import Spinner from '../Spinner/Spinner'
import Movies from '../Movies/Movies'

import './Main.scss'

const Main = ({ movies, isLoading }) => {
  const isFirstRender = useRef(true)
  const mainClassname = isLoading ? 'main main--loading' : 'main'

  if (isFirstRender.current) {
    isFirstRender.current = false

    return
  }

  return (
    <main className={mainClassname}>
      {isLoading ? <Spinner /> : <Movies movies={movies} />}
    </main>
  )
}

export default Main
