import React, { useState } from 'react';
import CarouselThumbnails from './CarouselThumbnails.jsx';
import Carousel from './Carousel.jsx';
import CustomCarousel from './CustomCarousel.jsx';


var ImageGallery = ({ currentStyleObj }) => {
  var [isExpanded, updateIsExpanded] = useState(false);

  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="ImageGallery">
      <CustomCarousel currentStyleObj={currentStyleObj} updateIsExpanded={updateIsExpanded} />
    </div>
  );
};

export default ImageGallery;

