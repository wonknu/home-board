import React from 'react';
import Meteo from '../Meteo';
import Train from '../Train';
import Timer from '../Timer';
import Clock from '../Clock';

function Board() {
  return  <div className="row">
  					<Clock/>
  					<Timer/>
  					<Meteo/>
  					<Train/>
	        </div>;
}

export default Board;