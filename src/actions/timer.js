import * as actionTypes from '../constants/actionTypes';

export function setTimer() {
	var date = new Date();
	var timer = {timer: date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2)};
	return {
    type: actionTypes.TIMER_SET,
    timer
  };
}
