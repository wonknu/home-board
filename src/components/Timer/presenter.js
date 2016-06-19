import React from 'react';

function Timer({ timer = {} }) {
  return (
    <div>
    	<div className="timer-wrapper">
    		Derniére mise a jour {timer.timer}
    	</div>
    </div>
  );
}

export default Timer;
