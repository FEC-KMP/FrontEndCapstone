import React from 'react';
import CarouselThumbnail from './CarouselThumbnail.jsx';

var CarouselThumbnails = ({ currentStyleObj }) => {
  if (!currentStyleObj) { return 'data not found' }
  return (
    <div className="ImageGalleryThumbnails col">
      <a className="" href="#carousel-thumbs" role="button" data-slide="prev">
        <i class="fas fa-chevron-up"></i>
      </a>
      <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
        {currentStyleObj.photos.map((photoObj) => {
          return <CarouselThumbnail photoObj={photoObj} photoIndex={currentStyleObj.photos.indexOf(photoObj)} />;
        })}
      </div>
      <a className="" href="#carousel-thumbs" role="button" data-slide="next">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  );
};

export default CarouselThumbnails;