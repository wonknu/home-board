import React from 'react';

function Train({ train = [] }) {
  return (
    <div className="train-wrapper">
    	<h2>Départ Bois le roi</h2>
      <div className="table-element">
        <div className="table">
          <div className="row">
    	{
        train.map((tr, key) => {
          return  <div className="full table" key={key}>
                    <div className="cell">
                      {tr.direction} ({tr.mode})
                    </div>
                    <div className="cell text-right">
                      {tr.hour}
                    </div>
				          </div>
        })
      }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Train;