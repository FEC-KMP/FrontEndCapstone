import React from 'react';
import CaroselImg from './CaroselImg.jsx';

var ImageGallery = ({ currentStyleObj }) => {
  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="ImageGallery">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#className" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {(currentStyleObj.photos).map(((photoObj) => {
            return <CaroselImg photoObj={photoObj} index={currentStyleObj.photos.indexOf(photoObj)}/>;
          }))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ImageGallery;