import React from 'react';
import Meteo from '../Meteo';
import Train from '../Train';
import Timer from '../Timer';
import Clock from '../Clock';
import styles from './board.css';

function Board() {
  return  <div className="">
  					<Clock/>
  					<div className="real-time">
	  					<Meteo/>
	  					<Train/>
	  					<Timer/>
  					</div>
	        </div>;
}

export default Board;