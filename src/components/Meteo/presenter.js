import React from 'react';
import Icon from './icon';

var getIcon = function (code) {
	var prefix = 'wi wi-';
  var res = Icon(code);
  var icon = res.icon;
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) icon = 'day-' + icon;
	return `${prefix}${icon}`;
}

var getHours = function (timestamp) {
	var date = new Date(timestamp*1000);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	return hours + ':' + minutes.substr(-2);
}

function Meteo({ openweathermap = {} }) {
  return (
    <div>
    	{
    		openweathermap ?
		    	<div className="weather">
		    		<h2>Météo {openweathermap.name}</h2>
			    	<div>
			    		<h3>Température :</h3>
				    	<div>
				    		<div className={getIcon(openweathermap.weather[0].id)}></div>
				    	</div>
				    	<div>Temperature : {parseInt(openweathermap.main.temp - 273)}°C</div>
				    	<div>Temperature max : {parseInt(openweathermap.main.temp_max - 273)}°C</div>
				    	<div>Temperature min : {parseInt(openweathermap.main.temp_min - 273)}°C</div>
			    		<div>Humidité : {openweathermap.main.humidity}%</div>
				    	<div>Pression atmosphérique : {openweathermap.main.pressure}</div>
			    	</div>
			    	<div>
			    		<h3>Vent :</h3>
			    		<div>Vitesse : {openweathermap.wind.speed * 3.6}km/h</div>
				    	<div>Direction du vent : {openweathermap.wind.deg}°</div>
			    	</div>
			    	<div>
			    		<h3>Nuages :</h3>
			    		<div>Couverture nuageuse : {openweathermap.clouds.all}%</div>
			    	</div>
			    	<div>
			    		<h3>Jour :</h3>
			    		<div>Levé du soleil : {getHours(openweathermap.sys.sunrise)}</div>
			    		<div>Couvhé du soleil : {getHours(openweathermap.sys.sunset)}</div>
			    	</div>
		    	</div>
		    	:
		    	<div className="weather">Loading</div>
    	}
    </div>
  );
}

export default Meteo;
