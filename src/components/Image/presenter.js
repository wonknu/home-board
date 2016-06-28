import React from 'react';

function Image({ image = "" }) {
	var divStyle = {backgroundImage: 'url(' + image.image + ')'};
  return (
    <div className="image" style={divStyle}></div>
  );
}

export default Image;
