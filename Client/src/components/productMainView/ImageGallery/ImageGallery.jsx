import React from 'react';
import CaroselImg from './CaroselImg.jsx';
import CaroselThumbnails from './CaroselThumbnails.jsx';

var ImageGallery = ({ currentStyleObj }) => {
  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="ImageGallery">
      <CaroselThumbnails />
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-thumb" data-slide-to="0" className="active"> <img className="d-block w-100" src="../../../../dist/imgs/pug1.jpeg"
            className="img-fluid" /></li>
          <li data-target="#carousel-thumb" data-slide-to="1"><img className="d-block w-100" src="../../../../dist/imgs/pug2.jpeg"
            className="img-fluid" /></li>
          <li data-target="#carousel-thumb" data-slide-to="2"><img className="d-block w-100" src="../../../../dist/imgs/pug3.jpeg"
            className="img-fluid" /></li>
        </ol>
        <div className="carousel-inner">
          {(currentStyleObj.photos).map(((photoObj) => {
            return <CaroselImg photoObj={photoObj} index={currentStyleObj.photos.indexOf(photoObj)} />;
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