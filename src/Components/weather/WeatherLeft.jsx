import React from "react";
import { Typography, Box, Grid, styled, Card } from "@mui/material";


const StyledBox = styled(Box)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

const WeatherLeft = ({ theme, forecast }) => {


    return (
        <Box style={{ padding: 5 }} >
            <Typography variant="h6"> Weather Forecast</Typography>
            <Grid container spacing={2}>
                {forecast.list.filter((_, index) => index % 6 === 0).map((item, index) => (

                    <Grid item xs={12} sm={4} key={index}>
                        <Card style={{ padding: 15 }} >
                            <Typography variant="body1">{new Date(item.dt_txt).toLocaleTimeString()}</Typography>
                            <StyledBox >
                                <Box>
                                    <img alt="weather" src={`icons/${item.weather[0].icon}.png`} style={{ width: '50%', filter: theme === 'light' ? 'none' : 'invert(1)' }} />
                                </Box>
                                <Box>
                                    <Typography variant="body2">Temp: {Math.round(item.main.temp)}°C</Typography>
                                    <Typography variant="body2">Humidity: {item.main.humidity}%</Typography>
                                    <Typography variant="body2">Wind: {item.wind.speed} m/s</Typography>
                                </Box>
                            </StyledBox>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WeatherLeft;
