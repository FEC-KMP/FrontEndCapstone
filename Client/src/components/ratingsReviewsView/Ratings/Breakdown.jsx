import React from 'react';
import RatingBar from './RatingBar.jsx';
import CharacteristicsBar from './CharacteristicsBar.jsx';

export default function Breakdown ({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }
  const getOnlyFive = (obj) => {
    var ratings = {};
    for (let key in obj) {
      if (key !== '6') {
        ratings[key] = obj[key];
      }
    }
    return ratings;
  };
  var ratings = getOnlyFive(metaInfo.ratings);
  return (
    <div>
      <div>
        {
          Object.keys(ratings).map((starRating, index) => (
            <RatingBar key={index} starRating={starRating} metaInfo={metaInfo} rating={ratings[starRating]}/>
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