import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Results from './components/Results'

const App = () => {
  const [newFilter, setNewFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = newFilter
    ? countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    : []
  
  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <Results countriesToShow={countriesToShow} setNewFilter={setNewFilter} />
    </div>
  )
}

export default App