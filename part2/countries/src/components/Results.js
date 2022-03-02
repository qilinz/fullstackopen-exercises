import Countries from './Countries'
import Country from './Country'

const Results = ({ countriesToShow, setNewFilter }) => {
  if (countriesToShow.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )

  } else if (countriesToShow.length > 1) {

    return (
     <Countries countriesToShow={countriesToShow} setNewFilter={setNewFilter}/>
    )

  } else if (countriesToShow.length === 1) {
    return (
      <Country country={countriesToShow[0]}/>
    )
  } 
  return (null)
}

export default Results