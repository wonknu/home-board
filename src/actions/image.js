import * as actionTypes from '../constants/actionTypes';

export function setImage() {
  var image = {image: `/assets/images/${parseInt(Math.random() * 15)}.jpg`}


  return function (dispatch) {

	  var sprite = new Image();
	  sprite.onload = function () {
	    dispatch({
	      type: actionTypes.IMAGE_SET,
	      image
	    });
	  }
	  sprite.src = image.image;
  };

	// return {
 //    type: actionTypes.IMAGE_SET,
 //    image
 //  };
}
