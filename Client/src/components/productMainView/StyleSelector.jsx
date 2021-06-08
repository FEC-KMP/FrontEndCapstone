import React from 'react';

var StyleSelector = ({currentStyleObj, productInfo}) => {
  //arrange thumbnails in rows of 4
  //click handler on thumbnail to change currentstyle

  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="StyleSelector" >
      <div>
        <strong>STYLE &gt; </strong> SELECTED STYLE
      </div>
      <div className="thumbnails">
        <div className="thumbnailRow">
          <img className="styleThumbnail" src="./imgs/pug1.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug2.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug3.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug4.jpeg"></img>
        </div>
        <div className="thumbnailRow">
          <img className="styleThumbnail" src="./imgs/pug1.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug2.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug3.jpeg"></img>
          <img className="styleThumbnail" src="./imgs/pug4.jpeg"></img>
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;