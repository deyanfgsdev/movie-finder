import useSearch from '../../hooks/useSearch'

import './Header.scss'

const Header = ({ getMovies }) => {
  const { search, updateSearch, errorMessage } = useSearch()

  const handleFormSubmit = (event) => {
    event.preventDefault()

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
      {errorMessage && <p className='header__form-error-message'>{errorMessage}</p>}
    </header>
  )
}

export default Header
