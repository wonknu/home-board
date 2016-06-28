import React from 'react';
import Meteo from '../Meteo';
import Train from '../Train';
import Clock from '../Clock';
import Image from '../Image';
import styles from './board.css';

function Board() {
  return  <div className="board-wrapper">
  					<Image/>
  					<Clock/>
  					<Meteo/>
  					<Train/>
	        </div>;
}

export default Board;