import React from 'react';

var ImageGallery = ({styleInfo}) => {
  if (!styleInfo) { return 'data not found'; }
  return (
    <div className="ImageGallery">Image here</div>
  );
};

export default ImageGallery;