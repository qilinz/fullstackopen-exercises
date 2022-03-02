const Filter = ({ newFilter, setNewFilter }) => {
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  return (
    <div>
      find countries<input value={newFilter} onChange={handleFilterChange}></input>
    </div>
  )
}

export default Filter