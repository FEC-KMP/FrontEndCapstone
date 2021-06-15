import React from 'react';

export default function RatingBar ({ metaInfo, starRating, rating }) {
  if (!metaInfo) { return 'data not found'; }
  const totalRatings = () => {
    const ratings = metaInfo.ratings;
    let total = 0;
    for (let key in ratings) {
      total += Number(ratings[key]);
    }
    return total;
  };

  var total = totalRatings();

  const percentageRated = ((rating / total) * 100 );

  return (
    <div>
      <div>{starRating} stars {percentageRated}%</div>
    </div>
  );
}