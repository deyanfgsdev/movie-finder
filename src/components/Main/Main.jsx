import { useRef } from 'react'

import Spinner from '../Spinner/Spinner'
import Movies from '../Movies/Movies'

import './Main.scss'

const Main = ({ movies, isLoading }) => {
  const isFirstRender = useRef(true)

  if (isFirstRender.current) {
    isFirstRender.current = false

    return
  }

  return (
    <main className='main'>
      {isLoading ? <Spinner /> : <Movies movies={movies} />}
    </main>
  )
}

export default Main
