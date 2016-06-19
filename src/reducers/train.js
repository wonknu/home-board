import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRAIN_SET:
      return setTrain(state, action);
  }
  return state;
}

function setTrain(state, action) {
  const { train } = action;
  return [ ...train ];
}