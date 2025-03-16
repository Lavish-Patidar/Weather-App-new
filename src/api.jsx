

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8a9c4a4f13msh11c02db512d4a69p13ef92jsncbceeac70885',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
};


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5`;


export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_SECRET_KEY;
