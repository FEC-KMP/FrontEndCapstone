import React, { useState } from 'react';
import Thumbnail from './Thumbnail.jsx';

var StyleSelector = ({ styleInfo, onStyleThumbnailClick }) => {
  //arrange thumbnails in rows of 4
  //click handler on thumbnail to change currentstyle
  if (!styleInfo) { return 'data not found'; }

  var stylePhotoUrls = styleInfo.map((styleObj) => {
    return styleObj.photos[0].thumbnail_url;
  });

  return (
    <div className="StyleSelector" >
      <div>
        <strong>STYLE &gt; </strong> SELECTED STYLE
      </div>
      <div className="thumbnails">
        {styleInfo.map((styleObj) => {
          return <Thumbnail styleObj={styleObj} onStyleThumbnailClick={onStyleThumbnailClick}/>;
        })}
      </div>
    </div>
  );
};

export default StyleSelector;