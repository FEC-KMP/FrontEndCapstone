import React, { useState } from 'react';
import CustomCarousel from './CustomCarousel.jsx';


var ImageGallery = ({ currentStyleObj, updateIsExpanded }) => {

  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="ImageGallery">
      <CustomCarousel currentStyleObj={currentStyleObj} updateIsExpanded={updateIsExpanded} />
    </div>
  );
};

export default ImageGallery;

