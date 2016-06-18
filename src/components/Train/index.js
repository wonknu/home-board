import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Train from './presenter';
import * as actions from '../../actions';

function mapStateToProps(state) {
  const train = state.train;
  return {
    train
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTrain: bindActionCreators(actions.setTrain, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Train);