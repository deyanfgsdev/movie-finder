import { useState, useMemo } from 'react';
import debounce from 'just-debounce-it';

import useSearch from '../../hooks/useSearch/useSearch';

import { SortState } from './Header.types';

import './Header.scss';

const Header = ({
  getMovies,
  checkSortMovies,
}: {
  getMovies: ({ search }: { search: string }) => Promise<void>;
  checkSortMovies: ({ newSortMovies }: { newSortMovies: boolean }) => void;
}) => {
  const { search, updateSearch, formErrorMessage } = useSearch();
  const [sort, setSort]: SortState = useState<boolean>(false);

  const debouncedGetMovies = useMemo(
    () =>
      debounce((search: string) => {
        getMovies({ search });
      }, 300),
    [getMovies]
  );

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    debouncedGetMovies(search);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newSearch } = event.target;

    // Prevent search if the input starts with a space
    if (newSearch.startsWith(' ')) return;

    updateSearch({ newSearch });
    debouncedGetMovies(newSearch);
  };

  const handleSortMoviesChange = () => {
    setSort(!sort);
    checkSortMovies({ newSortMovies: !sort });
  };

  return (
    <header className="header">
      <h1 className="header__title">Movie Finder</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          id="search-input"
          className="form__search-input"
          placeholder="Batman, Star Wars, Dune..."
          onChange={handleSearchChange}
        />
        <button type="submit" className="form__submit-button">
          Search
        </button>
      </form>
      {formErrorMessage && (
        <p className="header__form-error-message">{formErrorMessage}</p>
      )}
      <div className="sort-movies-wrapper">
        <p className="sort-movies-wrapper__text">
          Do you want to sort the movies by title?
        </p>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="sort-movies"
            className="checkbox-wrapper__checkbox"
            checked={sort}
            onChange={handleSortMoviesChange}
          />
          <label htmlFor="sort-movies" className="checkbox-wrapper__label">
            <span className="checkbox-checkmark">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g id="Interface / Check">
                    <path
                      id="Vector"
                      d="M6 12L10.2426 16.2426L18.727 7.75732"
                      stroke="#fcc434"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
