import React from 'react';

var Thumbnail = ({ styleObj, onStyleThumbnailClick }) => {

  return (
    <div>
      <img className={`styleThumbnail style${styleObj.style_id}`} src={`${styleObj.photos[0].thumbnail_url}`} key={`${styleObj.style_id}`} onClick={() => { onStyleThumbnailClick(styleObj.style_id); }} />
    </div>
  );
};

export default Thumbnail;