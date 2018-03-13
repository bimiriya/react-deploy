import React from 'react';
// sin components bc we'll create a stateless component
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ( {cities, onSelectedLocation} ) => {
    const handlerWeatherLocationClick = (city) => {
        console.log('jandler hueder lokechon')
        onSelectedLocation(city)
    }
    const strToComponent = (cities) => (
        cities.map(city => (
            <WeatherLocation 
              key = {city} 
              city = {city}
              onWeatherLocationClick = {
                  () => {
                    handlerWeatherLocationClick(city)
                  }}
              />
        ))
    )
    return (
            <div>
              {strToComponent(cities)}
            </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;