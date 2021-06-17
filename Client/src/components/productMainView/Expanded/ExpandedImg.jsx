import React from 'react';

var ExpandedImg = ({ photoObj, photoIndex, selectedIndex }) => {
  return (
    <div className={`carousel-item ${photoIndex === selectedIndex ? 'active' : ''}`} >
      <img className="d-block w-100 ExpandedImg" src={photoObj.url} alt={`Expanded Image Index ${photoIndex}`} />
    </div>
  );
};

export default ExpandedImg;