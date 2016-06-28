import React from 'react';

function Timer({ timer = {} }) {
  return (
  	<div className="timer-wrapper">
  		Derniére mise a jour {timer.timer}
  	</div>
  );
}

export default Timer;
