import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { useState,useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const namesToShow = newFilter
    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
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
      <Persons namesToShow={namesToShow} setPersons={setPersons} persons={persons}/>

    </div>
  )
}

export default App