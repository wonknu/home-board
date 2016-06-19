import * as actionTypes from '../constants/actionTypes';
import config from '../config/';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${config.WEATHER_API_KEY}`;

export function setWeather() {
	return function (dispatch) {
    return fetch(`${ROOT_URL}&q=${config.WEATHER_CITY},${config.WEATHER_LANG}`)
      .then(response => response.json())
      .then(json => {
        var openweathermap = json;
        dispatch({
          type: actionTypes.WEATHER_SET,
          openweathermap
        });
      })
  };
}
