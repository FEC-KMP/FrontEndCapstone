import React from 'react';
import StarRatings from 'react-star-ratings';



export default function Average({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }
  const ratingAverage = () => {
    const ratings = metaInfo.ratings;
    let totalRatings = 0;
    let avarageRating = 0;
    for (var key in ratings) {
      totalRatings += Number(ratings[key]);
      avarageRating += (Number(key) * Number(ratings[key]));
    }
    var result = (avarageRating / totalRatings);
    result = result.toFixed(1);
    return result;
  };
  const average = ratingAverage();
  return (
    <div className="row">
      <span className="average col-2">{average}</span>
      <div className="ratingsStars col">
        <StarRatings
          rating={Number(average)}
          starRatedColor="grey"
          numberOfStars={5}
          name='rating'
          starDimension="12px"
        />
      </div>
    </div>
  );
}