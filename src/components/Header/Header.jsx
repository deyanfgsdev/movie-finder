import { useState, useEffect, useRef } from 'react'

import './Header.scss'

const Header = ({ getMovies }) => {
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // Prevent the first input validation
    if (isFirstInput.current) {
      isFirstInput.current = false

      return
    }

    if (!search) {
      setErrorMessage('Please enter a movie')

      return
    }

    if (search.match(/^\d+$/)) {
      setErrorMessage("The search can't be a number")

      return
    }

    if (search.length < 3) {
      setErrorMessage('Please enter at least 3 characters')

      return
    }

    setErrorMessage(null)
  }, [search])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    getMovies({ search })
  }

  const handleSearchChange = (event) => {
    const { value: newSearch } = event.target

    // Prevent search if the input starts with a space
    if (newSearch.startsWith(' ')) return

    setSearch(newSearch)
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Movie Finder</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <input type='text' name='search' value={search} id='search-input' className='form__search-input' placeholder='Batman, Star Wars, Dune...' onChange={handleSearchChange} />
        <button type='submit' className='form__submit-button'>Search</button>
      </form>
      {errorMessage && <p className='header__form-error-message'>{errorMessage}</p>}
    </header>
  )
}

export default Header
