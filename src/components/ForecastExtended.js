import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css'

// const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// }

const api_key = '26202365286731356aaa7f162d871b97';
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({
        forecastData: null
      })
      this.updateCity(nextProps.city);
    }
  }

  updateCity = (city) => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(url_forecast).then(data => (data.json()))
    .then(weather_data => {
      console.log(weather_data);
      const forecastData = transformForecast(weather_data);
      console.log(forecastData);
      this.setState({forecastData});
    });
  }

  renderForcastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay = {forecast.weekDay} hour = {forecast.hour} data = {forecast.data}>
      </ForecastItem>
    ))
    // return days.map(day => (<ForecastItem key = {day} weekDay = {day} hour = {10} data = {data}></ForecastItem>))
      // <ForecastItem weekDay={'Miércoles'}>
      // </ForecastItem>
  };

  renderProgress = () => {
    return (<h3>Loading forecast...</h3>)
  }

  render() {
    const {city} = this.props;
    const {forecastData} = this.state;
    return(
    <div>
      <h2 className="forecastTitle">Extrended forecast for {city}</h2>
      {forecastData !== null ? this.renderForcastItemDays(forecastData) : this.renderProgress()}
    </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
