import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({data}) => {
    const {temp, weatherState, humidity, wind} = data;
    return (<div className = 'weatherDataCont'>
        <WeatherTemperature temp = {temp} weatherState = {weatherState} />
        <WeatherExtraInfo humidity = {humidity} wind = {wind}/>
    </div>)
    // humidity = variable 
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;