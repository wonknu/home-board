import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Meteo from './presenter';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const weather = state.temperature;
  var openweathermap = weather;
  return {
    openweathermap
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onWeather: bindActionCreators(actions.setWeather, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Meteo);