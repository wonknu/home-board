import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clock from './presenter';
import * as actions from '../../actions';
import styles from './clock.css';

function mapStateToProps(state) {
  const clock = state.clock;
  return {
    clock
  }
}

export default connect(mapStateToProps)(Clock);