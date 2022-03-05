import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import { useState,useEffect } from 'react'
import personService from './services/persons'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  
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
      <SuccessNotification message={successMessage}/>
      <ErrorNotification message={errorMessage} />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>

      <h2>add a new</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />

      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow} setPersons={setPersons} persons={persons} setSuccessMessage={setSuccessMessage} />

    </div>
  )
}

export default App