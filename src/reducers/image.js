import * as actionTypes from '../constants/actionTypes';

const initialState = {
	image: `/assets/images/${parseInt(Math.random() * 53)}.jpg`
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IMAGE_SET:
      return setImage(state, action);
  }
  return state;
}

function setImage(state, action) {
  const {image} = action;
  
  return image;
}