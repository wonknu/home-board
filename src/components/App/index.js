import React from 'react';
import reset from '../../assets/css/reset.css';
import styles from './app.css';
import weatherIconsWindMin from '../../assets/css/weather-icons-wind.min.css';
import weatherIconsMin from '../../assets/css/weather-icons.min.css';
import Timer from '../Timer';

function App({ children }) {

	var imgUrl = 'https://unsplash.it/2000/1000/?random'
	var divStyle = {
	  backgroundImage: 'url(' + imgUrl + ')'
	};

  return <div className="app-wrapper" style={divStyle}>
  	{children}
  	<Timer/>
  </div>;
}

export default App;