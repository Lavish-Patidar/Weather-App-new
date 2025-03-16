import React from "react";
import { Card, Typography, Box, Grid, styled } from "@mui/material";
import WeatherLeft from "./WeatherLeft";

const StyledCard = styled(Card)(({ theme }) => ({
    width: '60%',
    padding: 20,
    margin: '15px auto',
    [theme.breakpoints.down('sm')]: {
        width: '95%'
    }
}));

const LeftSide = styled(Box)(({ }) => ({
    padding: 20,
    margin: '20px 10px',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
    gap: '10rem',
    [theme.breakpoints.down("sm")]: {
        gap: '2rem',
    }
}))

const Weather = ({ data, theme, forecast }) => {
    return (
        <>
            <Grid>
                <StyledCard>
                    <Box padding={2}>
                        <StyledGrid container spacing={2} alignItems="center">
                            <Box>
                                <Typography variant="h5">{data.name}</Typography>
                                <Typography variant="body1">{data.weather[0].description}</Typography>
                            </Box>
                            <Box>
                                <img
                                    alt="weather"
                                    src={`icons/${data.weather[0].icon}.png`}
                                    style={{ filter: theme === 'light' ? 'none' : 'invert(1)' }}
                                />
                            </Box>
                        </StyledGrid>
                        <Box padding={2}>
                            <Typography variant="h6">{Math.round(data.main.temp)}°C</Typography>
                            <Box>
                                <Typography variant="body2">Details</Typography>
                                <Typography variant="body2">Feels like: {Math.round(data.main.feels_like)}°C</Typography>
                                <Typography variant="body2">Wind: {data.wind.speed} m/s</Typography>
                                <Typography variant="body2">Humidity: {data.main.humidity}%</Typography>
                                <Typography variant="body2">Pressure: {data.main.pressure} hPa</Typography>
                            </Box>
                        </Box>
                    </Box>
                </StyledCard>
                <LeftSide>
                    {forecast && <WeatherLeft forecast={forecast} theme={theme} />}

                </LeftSide>
            </Grid>
        </>
    );
};

export default Weather;
