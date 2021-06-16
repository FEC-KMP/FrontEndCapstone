import React from 'react';
import Ratings from '../Ratings/Ratings.jsx';

export default function RatingsContainer ({ metaInfo }) {

  if (!metaInfo) { return 'data not found'; }
  return (
    <div>
      <Ratings metaInfo={metaInfo}/>
    </div>
  );
}