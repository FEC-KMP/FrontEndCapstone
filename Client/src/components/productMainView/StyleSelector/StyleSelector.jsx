import React, { useState } from 'react';
import ThumbnailRow from './ThumbnailRow.jsx';

var StyleSelector = ({ styleInfo }) => {
  //arrange thumbnails in rows of 4
  //click handler on thumbnail to change currentstyle
  if (!styleInfo) { return 'data not found'; }

  var stylePhotos = styleInfo.map((styleObj) => {
    return styleObj.photos[0].thumbnail_url;
  });

  return (
    <div className="StyleSelector" >
      <div>
        <strong>STYLE &gt; </strong> SELECTED STYLE
      </div>
      <div className="thumbnails">
        {/* <ThumbnailRow stylePhotos={stylePhotos} /> */}
        <img className="styleThumbnail" src="./imgs/pug1.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug2.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug3.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug4.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug1.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug2.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug3.jpeg"></img>
        <img className="styleThumbnail" src="./imgs/pug4.jpeg"></img>
      </div>
    </div>
  );
};

export default StyleSelector;