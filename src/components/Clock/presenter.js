import React from 'react';

function Clock({ clock = "" }) {
  return (
    <div className="col-xs-12">
    	{clock.clock}
    </div>
  );
}

export default Clock;
