import React from 'react';
import ExpandedImg from './ExpandedImg.jsx';

var IGExpanded = ({currentStyleObj}) => {
  return (
    <div className="expandedView">
      {(currentStyleObj.photos).map(((photoObj) => {
        return <ExpandedImg photoObj={photoObj} index={currentStyleObj.photos.indexOf(photoObj)} />;
      }))}
    </div>
  );
};

export default IGExpanded;