import React from 'react';

var ImageGallery = ({currentStyleObj}) => {
  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="ImageGallery">Image here</div>
  );
};

export default ImageGallery;