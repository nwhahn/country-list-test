import { useEffect, useState, useRef, useCallback } from "react";
import StoreContext from "./StoreContext";
/**
 * Country
 * - name
 * - flag
 * - languages
 * - population
 * - capital
 * 
 */
const StoreContextProvider = ({ children }) => {
  const countryList = useRef([])
  const [countries, setCountries ] = useState([])
  const [query, setQuery ] = useState('')
  const [hasLoaded, setHasLoaded ] = useState(false)
  const [hasError, setHasError ] = useState(false)
  const [error, setError ] = useState('')
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v2/all')
      const data = await response.json()
      const list = data?.map(({ name, flag, languages, population, capital }) => ({ 
        name, 
        flag, 
        population, 
        languages: languages.map(({ name }) => name ), 
        capital,
        fullSearchText: [name, ...languages.map(({ name }) => name ), capital ].join(' ')
      }))
      countryList.current = list
      setCountries(filterCountries())
      setHasLoaded(true)
    } catch(e){
      setHasError(true)
      setError(e?.message)
    }
  }

  const filterCountries = useCallback(() => {
    if(!query || !hasLoaded) return countryList?.current || []
    const patterns = query.split(' ').map((word) => new RegExp(word, 'i'))
    return (countryList?.current || []).filter(({ fullSearchText }) => patterns.every(regex => regex.test(fullSearchText)))
  }, [query, hasLoaded])

  useEffect(() => {
    if(hasLoaded){
      if(!query) setCountries(countryList?.current || [])
      else if(query && hasLoaded){
        setCountries(filterCountries)
      }
    }
    
  }, [query, hasLoaded, filterCountries])

  useEffect(() => {
    fetchData()
  })
  
  return <StoreContext.Provider value={{
    countries,
    query,
    setQuery,
    hasError,
    error,
    hasLoaded
  }}>
    {children}
  </StoreContext.Provider>
}

export default StoreContextProvider