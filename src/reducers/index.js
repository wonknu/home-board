import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import train from './train';
import timer from './timer';
import clock from './clock';
import temperature from './temperature';

export default combineReducers({
  train,
  clock,
  timer,
  temperature,
  routing: routerReducer
});