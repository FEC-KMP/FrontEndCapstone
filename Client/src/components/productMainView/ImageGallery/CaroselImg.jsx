import React from 'react';

var CaroselImg = ({ photoObj, index }) => {
  if (index === 1) {
    return (
      <div className="carousel-item active" >
        <img className="d-block w-100" src={photoObj.url} alt={`Image Index ${index}`}/>
      </div>
    );
  }
  return (
    <div className="carousel-item">
      <img className="d-block w-100" src={photoObj.url} alt={`Image Index ${index}`}/>
    </div>
  );
};

export default CaroselImg;