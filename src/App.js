import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import { setCity } from './actions';
// import { store } from './store'
import './App.css';
import LocationListContainer from './containers/LocationListContainer';

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Seoul,kr',
  'Madrid,es',
  'Ciudad de México,mx'
];

// const store = createStore(() => {}, // función pura () => {} --> reducer
//   window.__REDUX_DEVTOOLS_EXTENSION_ && 
//   window.__REDUX_DEVTOOLS_EXTENSION_()
// );

// const store = createStore(() => {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());

  // // actionCreator
  // const setCity = (value) => (
  //   {
  //     type: 'setCity',
  //     value
  //   }
  // )

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="App">
            <LocationListContainer cities = {cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6} className="App">
              <Paper zDepth={4}>
                <div className="detail">
                <ForecastExtendedContainer/>             
                </div>
              </Paper>              
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}


export default App;
