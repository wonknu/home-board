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
    <div className="weather-wrapper">
    	{
    		openweathermap ?
		    	<div className="weather">
		    		<h2>Météo {openweathermap.name}</h2>
			    	<div className="flex">
				    	<div className="icon">
				    		<div className={getIcon(openweathermap.weather[0].id)}></div>
				    	</div>
				    	<div className="temperature">
					    	<div className="temperature-now">{parseInt(openweathermap.main.temp - 273)}°C</div>
					    	<div className="flex min-max">
						    	<div className="temperature-min">min {parseInt(openweathermap.main.temp_min - 273)}°C&nbsp;/&nbsp;</div>
						    	<div className="temperature-max">max {parseInt(openweathermap.main.temp_max - 273)}°C</div>
					    	</div>
				    	</div>
			    	</div>
			    	<div className="table-element">
			    		<div className="table">
			    			<div className="row">
				    			<div className="cell">Humidité</div>
				    			<div className="cell text-right">{openweathermap.main.humidity}%</div>
			    			</div>
			    			<div className="row">
					    		<div className="cell">Pression atmosphérique</div>
					    		<div className="cell text-right">{openweathermap.main.pressure}</div>
			    			</div>
			    			<div className="row">
				    			<div className="cell">Vitesse</div>
				    			<div className="cell text-right">{parseInt(openweathermap.wind.speed * 3.6)}km/h</div>
			    			</div>
			    			<div className="row">
					    		<div className="cell">Direction du vent</div>
					    		<div className="cell text-right">{openweathermap.wind.deg}°</div>
			    			</div>
			    			<div className="row">
				    			<div className="cell">Couverture nuageuse</div>
				    			<div className="cell text-right">{openweathermap.clouds.all}%</div>
			    			</div>
			    			<div className="row">
				    			<div className="cell">Levé du soleil</div>
				    			<div className="cell text-right">{getHours(openweathermap.sys.sunrise)}</div>
			    			</div>
			    			<div className="row">
				    			<div className="cell">Couché du soleil</div>
				    			<div className="cell text-right">{getHours(openweathermap.sys.sunset)}</div>
			    			</div>
			    		</div>
			    	</div>
		    	</div>
		    	:
		    	<div className="weather">Loading</div>
    	}
    </div>
  );
}

export default Meteo;
