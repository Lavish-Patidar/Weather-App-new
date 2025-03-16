import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { Card, Typography, Box } from '@mui/material';

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data, theme }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <Box>
            <Typography variant="h6"> Daily</Typography>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <Card>
                                    <Box display="flex" alignItems="center" padding={2}>
                                        <img
                                            alt="weather"
                                            src={`icons/${item.weather[0].icon}.png`}
                                            style={{ filter: theme === 'light' ? 'none' : 'invert(1)' }}
                                        />
                                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                                            {forecastDays[idx]}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginLeft: 2 }}>
                                            {item.weather[0].description}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginLeft: 2 }}>
                                            {Math.round(item.main.temp_min)}°C /{" "}
                                            {Math.round(item.main.temp_max)}°C{" "}
                                        </Typography>
                                    </Box>
                                </Card>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Box className="daily-details-grid">
                                <Box className="daily-details-grid-items">
                                    <Typography>Pressure:</Typography>
                                    <Typography>{item.main.pressure} hPa</Typography>
                                </Box>
                                <Box className="daily-details-grid-items">
                                    <Typography>Humidity:</Typography>
                                    <Typography>{item.main.humidity}%</Typography>
                                </Box>
                                <Box className="daily-details-grid-items">
                                    <Typography>Clouds:</Typography>
                                    <Typography>{item.clouds.all}%</Typography>
                                </Box>
                                <Box className="daily-details-grid-items">
                                    <Typography>Wind Speed:</Typography>
                                    <Typography>{item.wind.speed} m/s</Typography>
                                </Box>
                                <Box className="daily-details-grid-items">
                                    <Typography>Sea Level:</Typography>
                                    <Typography>{item.main.sea_level}m</Typography>
                                </Box>
                                <Box className="daily-details-grid-items">
                                    <Typography>Feels Like:</Typography>
                                    <Typography>{Math.round(item.main.feels_like)}°C</Typography>
                                </Box>
                            </Box>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default Forecast;
