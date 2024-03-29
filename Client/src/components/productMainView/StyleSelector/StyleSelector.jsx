import React, { useState } from 'react';
import Thumbnail from './Thumbnail.jsx';

var StyleSelector = ({ styleInfo, onStyleThumbnailClick }) => {

  var [selectedStyleName, updateSelectedStyleName] = useState("Forest Green & Black");
  //arrange thumbnails in rows of 4
  //click handler on thumbnail to change currentstyle
  if (!styleInfo) { return 'data not found'; }

  var stylePhotoUrls = styleInfo.map((styleObj) => {
    return styleObj.photos[0].thumbnail_url;
  });

  return (
    <div className="StyleSelector" >
      <div>
        <strong>STYLE &gt; </strong> {selectedStyleName}
      </div>
      <div className="thumbnails">
        {styleInfo.map((styleObj) => {
          return <Thumbnail styleObj={styleObj} onStyleThumbnailClick={onStyleThumbnailClick} selectedStyleName={selectedStyleName} updateSelectedStyleName={updateSelectedStyleName}/>;
        })}
      </div>
    </div>
  );
};

export default StyleSelector;