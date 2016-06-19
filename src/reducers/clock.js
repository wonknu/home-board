import * as actionTypes from '../constants/actionTypes';

const initialState = {
	clock: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CLOCK_SET:
      return setClock(state, action);
  }
  return state;
}

function setClock(state, action) {
  const {clock} = action;
  return clock;
}