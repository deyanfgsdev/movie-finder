import { useState } from 'react'

import './Header.scss'

const Header = () => {
  const [search, setSearch] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
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
    </header>
  )
}

export default Header
