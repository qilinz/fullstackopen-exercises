import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const namesToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>

      <h2>add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow}/>

    </div>
  )
}

export default App