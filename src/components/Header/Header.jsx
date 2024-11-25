import { useRef } from 'react'

import useSearch from '../../hooks/useSearch'

import './Header.scss'

const Header = ({ getMovies }) => {
  const { search, updateSearch, formErrorMessage } = useSearch()
  const prevSearch = useRef(search)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // Prevent the same search from being done twice in a row
    if (prevSearch.current === search) return

    prevSearch.current = search
    getMovies({ search })
  }

  const handleSearchChange = (event) => {
    const { value: newSearch } = event.target

    // Prevent search if the input starts with a space
    if (newSearch.startsWith(' ')) return

    updateSearch({ newSearch })
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Movie Finder</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <input type='text' name='search' value={search} id='search-input' className='form__search-input' placeholder='Batman, Star Wars, Dune...' onChange={handleSearchChange} />
        <button type='submit' className='form__submit-button'>Search</button>
      </form>
      {formErrorMessage && <p className='header__form-error-message'>{formErrorMessage}</p>}
      <div className='sort-movies-wrapper'>
        <p className='sort-movies-wrapper__text'>Do you want to sort the movies by title?</p>
        <div className='checkbox-wrapper'>
          <input type='checkbox' id='sort-movies' className='checkbox-wrapper__checkbox' />
          <label htmlFor='sort-movies' className='checkbox-wrapper__label' />
        </div>
      </div>
    </header>
  )
}

export default Header
