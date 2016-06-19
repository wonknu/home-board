import React from 'react';

function Clock({ clock = "" }) {
  return (
    <div className="clock">
    	{clock.clock}
    </div>
  );
}

export default Clock;
