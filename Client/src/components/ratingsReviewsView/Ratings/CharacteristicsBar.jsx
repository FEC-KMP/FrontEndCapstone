import React from 'react';

export default function Characteristics ({ metaInfo, characteristic, rating }) {
  if (!metaInfo) { return 'data not found'; }
  var ratingsObj = metaInfo;
  return (
    <div>
      <div>
        {characteristic} {rating}
      </div>
    </div>
  );
}