import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Image from './presenter';
import * as actions from '../../actions';
import styles from './image.css';

function mapStateToProps(state) {
  const image = state.image;
  
  return {
    image
  }
}

export default connect(mapStateToProps)(Image);