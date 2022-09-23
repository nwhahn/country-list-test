import { createContext } from 'react'


const StoreContext = createContext({
  countries: [],
  query: '',
  setQuery: () => {},
  hasLoaded: false
})

export default StoreContext