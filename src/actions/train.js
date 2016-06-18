import * as actionTypes from '../constants/actionTypes';

export function setTrain() {
	return function (dispatch) {
    return fetch(`https://www.durville.io/api/Geo/getCities?name=lyon&lang=fr}`)
      .then((response) => {
      	response.json()
      	var train = [
          {
            'destination': 'Paris',
            'time': '10 minues'
          },
          {
            'destination': 'Montargis',
            'time': '20 minues'
          },
          {
            'destination': 'Paris',
            'time': '30 minues'
          }
        ]
      	dispatch({
			    type: actionTypes.TRAIN_SET,
			    train
			  });
      });
  };
}
