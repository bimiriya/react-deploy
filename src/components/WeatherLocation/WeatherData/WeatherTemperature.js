import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from './../../../constant/weathers';

const stateToIconName = (weatherState) => {
    switch (weatherState) {
        case CLOUD:
        return 'cloud';
        case CLOUDY:
        return 'cloudy';
        case SUN:
        return 'day-sunny';
        case RAIN:
        return 'rain';
        case SNOW:
        return 'snow';
        case WINDY:
        return 'windy';
        case THUNDER:
        return 'day-thunderstorm';
        case DRIZZLE:
        return 'day-showers';
        default:
        return 'day-sunny';
    }
}

const getWeatherIcon = (weatherState) => {
    // switch (weatherState) {
    //     case 'day-sunny':
    //     return (<WeatherIcons name = 'day-sunny' size = '2x' />);
    //     default:
    //     return (<WeatherIcons name = 'cloud' size = '2x' />);
    return <WeatherIcons name = {stateToIconName(weatherState)} size = '2x' />
}

const WeatherTemperature = ({temp, weatherState}) => (
    <div>
         {getWeatherIcon(weatherState)}
        <span>{temp}°C</span>
    </div>
)

WeatherTemperature.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;