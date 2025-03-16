import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './Components/Header/Header';

import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import Search from './Components/Search/Search';
import Weather from './Components/weather/Weather';
import Forecast from './Components/Forecast/Forecast';

function App() {
    const [currentWeather, setCurrentWeather] = useState();
    const [forecast, setForecast] = useState();
    const [theme, setTheme] = useState('light');

    const themeConfig = createTheme({
        palette: {
            mode: theme,
            background: {
                default: theme === 'light' ? '#ffffff' : '#121212',
            },
        },
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const handleonSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(' ');
        const curruntWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([curruntWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherData = await response[0].json();
                const forcastData = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherData });
                setForecast({ city: searchData.label, ...forcastData });
            })
            .catch((err) => console.error(err));
    };

    return (
        <ThemeProvider theme={themeConfig}>
            <CssBaseline />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Box sx={{ padding: 2 }}>

                <Search onSearchChange={handleonSearchChange} />
                {currentWeather && <Weather data={currentWeather} theme={theme} forecast={forecast} />}
                {forecast && <Forecast data={forecast} theme={theme} />}
            </Box>
        </ThemeProvider>
    );
}

export default App;
