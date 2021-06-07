import React from 'react';

var StyleSelector = () => {
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