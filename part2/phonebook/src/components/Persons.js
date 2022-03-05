import Person from "./Person"
import personService from "../services/persons"

const Persons = ({ namesToShow, setPersons, persons, setSuccessMessage }) => {
  const handleDelete = (id, name) => {
    const result = window.confirm(`Delete ${name}?`)
    if (result) {
      personService
        .deleteNumber(id)
      setPersons(persons.filter(person => person.id !== id))
      setSuccessMessage(`${name} deleted successfully`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    }

  }

  return (
    <div>
      {namesToShow.map(person => 
        <Person key={person.id} person={person} handleDelete={() => handleDelete(person.id, person.name)} />
      )}
    </div>
  )
}

export default Persons