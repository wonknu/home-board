import React from 'react';

function Train({ train = [] }) {
  return (
    <div>
    	{
        train.map((tr, key) => {
          return <div className="train" key={key}>{tr.destination} : {tr.time}</div>;
        })
      }
    </div>
  );
}

export default Train;