const Persons = ({ namesToShow }) => {
  return (
    <div>
      {namesToShow.map(person => 
        <div key={person.id}>{person.name} {person.number}</div>
      )}
    </div>
  )
}

export default Persons