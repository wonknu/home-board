import React from 'react';
import reset from '../../assets/css/reset.css';
import styles from './app.css';
import weatherIconsWindMin from '../../assets/css/weather-icons-wind.min.css';
import weatherIconsMin from '../../assets/css/weather-icons.min.css';
import Timer from '../Timer';

function App({ children }) {
  return <div className="app-wrapper">
  	{children}
  	<Timer/>
  </div>;
}

export default App;