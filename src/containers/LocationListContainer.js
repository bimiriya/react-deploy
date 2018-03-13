import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    this.setState({city});
    this.props.setCity(city)
  }

  render() {
    return (
  <div>
    <LocationList
    cities = { this.props.cities }
    onSelectedLocation = {this.
    handleSelectionLocation}>
  </LocationList>
  </div>
    )
  }
}

// allows us to work with actions
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);