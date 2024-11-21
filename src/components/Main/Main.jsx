import Movies from '../Movies/Movies'

import './Main.scss'

const Main = ({ movies }) => {
  return (
    <main className='main'>
      <Movies movies={movies} />
    </main>
  )
}

export default Main
