import { useState, useEffect, useRef } from 'react'

const useSearch = () => {
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

  const updateSearch = ({ newSearch }) => {
    setSearch(newSearch)
  }

  return { search, updateSearch, errorMessage }
}

export default useSearch
