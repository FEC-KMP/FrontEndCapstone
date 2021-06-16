import React from 'react';

var CarouselThumbnail = ({ photoObj, photoIndex }) => {
  if (photoIndex === 0) {
    return (
      <div id={`carousel-selector-${photoIndex} carousel-thumbnail-item active`} className="thumb px-1 py-2" data-target="#myCarousel" data-slide-to={photoIndex}>
        <img className='carousel-thumbnail-item' src={photoObj.thumbnail_url} alt="" />
      </div>
    );
  }
  return (
    <div id={`carousel-selector-${photoIndex} carousel-thumbnail-item `} className="thumb px-1 py-2" data-target="#myCarousel" data-slide-to={photoIndex}>
      <img className='carousel-thumbnail-item' src={photoObj.thumbnail_url} alt="" />
    </div>
  );
};

export default CarouselThumbnail;

