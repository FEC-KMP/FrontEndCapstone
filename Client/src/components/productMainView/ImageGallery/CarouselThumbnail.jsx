import React from 'react';

var CarouselThumbnail = ({ photoObj, photoIndex, selectedIndex, updateSelectedIndex }) => {
  return (
    <div id={`carousel-selector-${photoIndex}`} className={`carousel-thumbnail-item px-1 py-2`} >
      <img className={`thumbImg ${photoIndex === selectedIndex ? 'selectedThumb' : ''}`} src={photoObj.thumbnail_url} alt="img thumbnail" onClick={() => { updateSelectedIndex(photoIndex); }} />
    </div>
  );
};

export default CarouselThumbnail;

