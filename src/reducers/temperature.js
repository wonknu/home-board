import * as actionTypes from '../constants/actionTypes';

const initialState = {
		coord: { lon: 0.0, lat: 0.0 },
		weather: [{ id: 802, main: "undefined", description: "undefined", icon: "000" }],
		base: "cmc stations",
		main: {
			temp: 0.0,
			pressure: 0.0,
			humidity: 0.0,
			temp_min: 0.0,
			temp_max: 0.0
		},
		wind: { speed: 0.0, deg: 0 },
		rain: {},
		clouds: { all: 0 },
		dt: 1466249231,
		sys: { type: 3, id: 211400, message: 0.0, country: "FR", sunrise: 0, sunset: 0 },
		id: 3032008,
		name: "undefined",
		cod: 200
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.WEATHER_SET:
    	if(action.openweathermap.cod === "404") action = {openweathermap: initialState};
      return setWeather(state, action);
  }
  return state;
}

function setWeather(state, action) {
  const { openweathermap } = action;
  return openweathermap;
}