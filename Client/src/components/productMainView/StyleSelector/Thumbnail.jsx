import React from 'react';

var Thumbnail = ({ styleObj, onStyleThumbnailClick, selectedStyleName, updateSelectedStyleName }) => {

  return (
    <div>
      <img className={`styleThumbnail style${styleObj.style_id} ${styleObj.name === selectedStyleName ? 'selectedStyle' : ''}`} src={`${styleObj.photos[0].thumbnail_url}`} key={`${styleObj.style_id}`} onClick={() => { onStyleThumbnailClick(styleObj.style_id); updateSelectedStyleName(styleObj.name); }} />
    </div>
  );
};

export default Thumbnail;