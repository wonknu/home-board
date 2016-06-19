import * as actionTypes from '../constants/actionTypes';

const initialState = {
	timer: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TIMER_SET:
      return setTimer(state, action);
  }
  return state;
}

function setTimer(state, action) {
  const {timer} = action;
  return timer;
}