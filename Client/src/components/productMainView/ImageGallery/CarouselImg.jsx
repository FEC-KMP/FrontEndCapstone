import React from 'react';

var CarouselImg = ({ photoObj, photoIndex, updateSelectedIndex, selectedIndex }) => {
  return (
    <div className={`carousel-item ${photoIndex === selectedIndex ? 'active' : ''}`} >
      <img className="d-block w-100" src={photoObj.url} alt={`Image Index ${photoIndex}`} onClick={() => { updateSelectedIndex(index); }} />
    </div>
  );
};

export default CarouselImg;