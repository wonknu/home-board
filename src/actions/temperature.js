import * as actionTypes from '../constants/actionTypes';

const API_KEY = '80d1558ba8d87b07698f12c0aa875835';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;
const CITY = 'Bois-le-Roi';
const LANG = 'fr';

export function setWeather() {
	return function (dispatch) {
    return fetch(`${ROOT_URL}&q=${CITY},${LANG}`)
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
