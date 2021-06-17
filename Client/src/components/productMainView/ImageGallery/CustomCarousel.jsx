import React, { useState } from 'react';
import CarouselImg from './CarouselImg.jsx';
import CarouselThumbnail from './CarouselThumbnail.jsx';

var CustomCarousel = ({ currentStyleObj, updateIsExpanded }) => {
  var [selectedIndex, updateSelectedIndex] = useState(0);
  var [stylePhotoLength, updateStylePhotoLength] = useState(currentStyleObj.photos.length);

  return (
    <div className='CustomCarousel'>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <a className="expandButton" onClick={() => { updateIsExpanded(true); }} role="button" data-slide="next">
          <i class="fas fa-expand"></i>
        </a>
        <div className="CC-inner">
          <div className="CC-ThumbnailsList col">
            <div id="carousel-thumbs" className="CC-ThumbnailsList-Thumbnails">
              {currentStyleObj.photos.map((photoObj) => {
                return <CarouselThumbnail photoObj={photoObj} photoIndex={currentStyleObj.photos.indexOf(photoObj)} selectedIndex={selectedIndex} updateSelectedIndex={updateSelectedIndex} />;
              })}
            </div>
          </div>
          <div className="CC-MainImageList col">
            <div id="carousel-imgs" className="CC-MainImageList-Imgs">
              {(currentStyleObj.photos).map(((photoObj) => {
                return <CarouselImg photoObj={photoObj} photoIndex={currentStyleObj.photos.indexOf(photoObj)} updateSelectedIndex={updateSelectedIndex} selectedIndex={selectedIndex} />;
              }))}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" onClick={() => { if (selectedIndex > 0) { updateSelectedIndex(selectedIndex - 1); } }}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" onClick={() => { if (selectedIndex < stylePhotoLength - 1) { updateSelectedIndex(selectedIndex + 1); } }}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;