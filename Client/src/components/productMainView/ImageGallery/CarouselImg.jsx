import React from 'react';

var CarouselImg = ({ photoObj, photoIndex, updateSelectedIndex, selectedIndex }) => {
  return (
    <div className={`carousel-item ${photoIndex === selectedIndex ? 'active' : ''}`} >
      <img className="d-block w-100 MainImg" src={photoObj.url} alt={`Image Index ${photoIndex}`} onClick={() => { updateSelectedIndex(photoIndex); }} />
    </div>
  );
};

export default CarouselImg;