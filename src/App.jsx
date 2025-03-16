import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css'
import Search from './Components/Search/Search'
import Weather from './Components/weather/Weather';
import Forecast from './Components/Forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();


  const handleonSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const curruntWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([curruntWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherData = await response[0].json();
        const forcastData = await response[1].json();

        setCurrentWeather({ city: searchData.lable, ...weatherData });
        setForecast({ city: searchData.lable, ...forcastData });
      })
      .catch((err) => console.error(err));

  }



  return (
    <>
      <div className='container'>
        <Search onSearchChange={handleonSearchChange} />
        {currentWeather && < Weather data={currentWeather} />}

        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  )
}

export default App
