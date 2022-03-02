import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: capital,
          appid: process.env.REACT_APP_API_KEY,
          units: 'metric'
        }
      })
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })
      
  }, [capital])

  if (Object.keys(weather).length > 0) {
    return (
      <div>
        <div>temperature {weather.main.temp} Celcius</div>
        <img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon +'@2x.png'} alt='' />
        <div>wind {weather.wind.speed} m/s</div>
      </div>
    )
  }
  return (null)
}

export default Weather