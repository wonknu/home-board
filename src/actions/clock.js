import * as actionTypes from '../constants/actionTypes';

export function setClock() {
	var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var months = new Array('janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juill', 'aout', 'sept', 'oct', 'nov', 'déc');
  var d = date.getDate();
  var day = date.getDay();
  var days = new Array('lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim');
  var h = date.getHours();
  if(h < 10) h = `0${h}`;
  var m = date.getMinutes();
  if(m < 10) m = `0${m}`;
  var s = date.getSeconds();
  if(s < 10) s = `0${s}`;

  var clock = {
    clock: `${days[day]} ${d} ${months[month]} ${year} ${h}:${m}:${s}`,
    day: `${days[day]}`,
    dayNumber: `${d}`,
    month: `${months[month]}`,
    year: `${year}`,
    time: `${h}:${m}`,
    secondes: `${s}`
  }

	return {
    type: actionTypes.CLOCK_SET,
    clock
  };
}
