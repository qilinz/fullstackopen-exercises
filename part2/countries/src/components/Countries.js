const Countries = ({ countriesToShow, setNewFilter }) => {
  return (  
    <div>
      {countriesToShow.map(country => {
        return (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => setNewFilter(country.name.common)}>
              show
            </button>

          </div>
        )}
      )}
    </div>
  )
}

export default Countries