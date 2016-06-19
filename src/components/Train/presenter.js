import React from 'react';

function Train({ train = [] }) {
  return (
    <div className="train-wrapper">
    	<h2>Prochain train au départ de Bois le roi :</h2>
    	{
        train.map((tr, key) => {
          return  <div key={key}>
				        		<div>{tr.direction} ({tr.mode}) : {tr.hour}</div>
				          </div>
        })
      }
    </div>
  );
}

export default Train;