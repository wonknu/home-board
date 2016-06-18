import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import train from './train';
import temperature from './temperature';

export default combineReducers({
  track,
  train,
  temperature,
  routing: routerReducer
});