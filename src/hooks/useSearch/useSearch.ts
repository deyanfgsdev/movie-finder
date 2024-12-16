import { useState, useEffect, useRef } from 'react';

import { SearchState, FormErrorMessageState } from './useSearch.types';

const useSearch = () => {
  const [search, setSearch]: SearchState = useState<string>('');
  const [formErrorMessage, setFormErrorMessage]: FormErrorMessageState =
    useState<string | null>(null);
  const isFirstInput = useRef<boolean>(true);

  useEffect(() => {
    // Prevent the first input validation
    if (isFirstInput.current) {
      isFirstInput.current = false;

      return;
    }

    if (!search) {
      setFormErrorMessage('Please enter a movie');

      return;
    }

    if (search.match(/^\d+$/)) {
      setFormErrorMessage("The search can't be a number");

      return;
    }

    if (search.length < 3) {
      setFormErrorMessage('Please enter at least 3 characters');

      return;
    }

    setFormErrorMessage(null);
  }, [search]);

  const updateSearch = ({ newSearch }: { newSearch: string }) => {
    setSearch(newSearch);
  };

  return { search, updateSearch, formErrorMessage };
};

export default useSearch;
