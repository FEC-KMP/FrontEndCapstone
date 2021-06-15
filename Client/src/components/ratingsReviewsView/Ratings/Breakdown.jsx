import React from 'react';
import RatingBar from './RatingBar.jsx';
import CharacteristicsBar from './CharacteristicsBar.jsx';

export default function Breakdown ({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }
  return (
    <div>
      <div>
        {
          Object.keys(metaInfo.ratings).map((starRating, index) => (
            <RatingBar key={index} starRating={starRating} metaInfo={metaInfo} rating={metaInfo.ratings[starRating]}/>
          ))
        }
      </div>
      <div>
        {
          Object.keys(metaInfo.characteristics).map((characteristic, index) => (
            <CharacteristicsBar key={index} characteristic={characteristic} metaInfo={metaInfo} rating={metaInfo.characteristics[characteristic].value}/>
          ))
        }
      </div>
    </div>
  );
}