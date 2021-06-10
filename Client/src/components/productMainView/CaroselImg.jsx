import React from 'react';

var CaroselImg = ({ photo, index }) => {
  return (
    <div class="carousel-item active">
      <img class="d-block w-100" src={photo.url} alt={`Image Index ${index}`}/>
    </div>
  );
};

export default CaroselImg;