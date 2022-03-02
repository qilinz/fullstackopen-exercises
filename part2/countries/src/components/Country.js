import Weather from "./Weather"

const Country = ({country}) => {
  const languages = Object.values(country.languages)
  const capital = country.capital[0]

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {capital}</div>
      <div>area {country.area}</div>

      <h4>languages:</h4>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <div>{country.flag}</div>

      <h3>Weather in {capital}</h3>
      <Weather capital={capital} />
    </div>
  )
}
export default Country