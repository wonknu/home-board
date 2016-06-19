import React from 'react';

function Timer({ timer = {} }) {
  return (
    <div className="col-xs-12">
    	Derniére mise a jour {timer.timer}
    </div>
  );
}

export default Timer;
