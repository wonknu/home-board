import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Timer from './presenter';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const timer = state.timer;
  return {
    timer
  }
}

export default connect(mapStateToProps)(Timer);