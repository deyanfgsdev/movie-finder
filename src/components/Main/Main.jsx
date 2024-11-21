import { useRef } from 'react'

import Movies from '../Movies/Movies'

import './Main.scss'

const Main = ({ movies }) => {
  const isFirstRender = useRef(true)

  if (isFirstRender.current) {
    isFirstRender.current = false

    return
  }

  return (
    <main className='main'>
      <Movies movies={movies} />
    </main>
  )
}

export default Main
