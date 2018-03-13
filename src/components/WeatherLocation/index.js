import React, { Component } from 'react';
import Proptypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';

// import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../constant/weathers';

const api_key = 'f5355cc45904a972b87b6b6c279ec960';
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather';

// const data1 = {
//     temp: 32,
//     weatherState: SUN,
//     humidity: 2,
//     wind: '10 m/s',
// }

// const data2 = {
//     temp: 18,
//     weatherState: CLOUD,
//     humidity: 8,
//     wind: '55 m/s',
// }

// const WeatherLocation = () => (
//     <div>
//         <Location city = {'Santiago'}/>
//         <WeatherData data = {data} />
//     </div>
// )

class WeatherLocation extends Component {
    constructor ( {city} ) {
        super();
        this.state = {
            city,
            data: null
        }
        console.log('constructor')
    }

    // handleUpdateClick = () => {
    //     // this.setState ({
    //     //     // city: 'Santiago',
    //     //     data: data2
    //     // })

    //     const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    //     fetch(api_weather)
    //       .then(data => {
    //           return data.json();
    //       })
    //       .then(weather_data => {
    //           const data = transformWeather(weather_data);
    //           this.setState({ data });
    //       })
    //     console.log('updated')
    // }

    componentWillMount() {
        // console.log('ComponentWillMount')
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather)
          .then(data => {
              return data.json();
          })
          .then(weather_data => {
              const data = transformWeather(weather_data);
              this.setState({ data });
          })
    }

    // componentDidMount() {
    //     console.log('didmount')
    // }

    // componentWillUpdate() {
    //     console.log('will update')
    // }

    // componentDidUpdate() {
    //     console.log('did update')
    // }

    render = () => {
        // console.log('render')
        const { onWeatherLocationClick } = this.props;
    const {city, data} = this.state;
    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };
    return (
      <div className="dataContainer weatherLocation" onClick= {onWeatherLocationClick}>
       <Location city = {city}/>
       { data !== null ? <WeatherData data = {data}/> : <CircularProgress
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
       }
   </div>
    );
    }
}

WeatherLocation.prototypes = {
    city: Proptypes.string,
    onWeatherLocationClick: Proptypes.func,
}

export default WeatherLocation;