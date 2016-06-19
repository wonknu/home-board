import * as actionTypes from '../constants/actionTypes';
import config from '../config/';

const ROOT_URL = `https://api.sncf.com/v1/coverage/sncf/`;

var dateIso = function () {
  return new Date().toISOString().replace(/-|:/g, '').split('.')[0];
}

var humanReadableHour = function (date) {
  var date = new Date(date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6, 11) + ":" + date.slice(11, 13) + ":" + date.slice(13, 15))
  date.setHours(date.getHours() - 1);
  var hours = date.getHours() - 1;
  var minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr(-2);
}

export function setTrain() {
	return function (dispatch) {
    return fetch(`${ROOT_URL}stop_areas/stop_area:OCE:SA:${config.TRAIN_CITY}${config.TRAIN_METHOD}${dateIso()}`, {
        headers: {
          Authorization: 'Basic ' + btoa(config.TRAIN_API_KEY)
        }
      })
      .then(response => response.json())
      .then(json => {
        var deps = json.departures;
        var train = [];
        deps.forEach(function (dep) {
          train.push({
            direction: dep.display_informations.direction.replace(/ \(.*?\)/, '').trim().replace(/-/g, ' '),
            label: dep.display_informations.label,
            mode: dep.display_informations.commercial_mode,
            hour: humanReadableHour(dep.stop_date_time.departure_date_time)
          })
        })
        dispatch({
          type: actionTypes.TRAIN_SET,
          train
        });
      });
  };
}
