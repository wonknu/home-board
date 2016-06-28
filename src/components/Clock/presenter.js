import React from 'react';

function Clock({ clock = "" }) {
  return (
    <div className="clock">
    	<div className="text-right inline">
	    	<div className="day">{clock.day}</div>
	    	<div className="month">{clock.month}</div>
	    	<div className="year">{clock.year}</div>
    	</div>
    	<div className="day-number inline">{clock.dayNumber}</div>
    	<div className="time">
    		<span className="time-wrapper">
    			{clock.time}<span className="secondes"> : {clock.secondes}</span>
    		</span>
    	</div>
    </div>
  );
}

export default Clock;
