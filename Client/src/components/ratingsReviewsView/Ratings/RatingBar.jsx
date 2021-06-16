import React, { useContext } from 'react';
import ReviewContext from '../../ReviewContext.jsx';

export default function RatingBar ({ metaInfo, starRating, rating }) {
  if (!metaInfo) { return 'data not found'; }

  var { starFilter, updateStarFilter } = useContext(ReviewContext);

  const handleStarClick = (starRating) => {
    // starFilter.push(starRating);
    updateStarFilter([starRating]);
    // for (let i = 0; i < starFilter.length; i ++) {
    //   if (!starFilter.length) {
    //     updateStarFilter([starRating]);
    //   } else {
    //     starFilter.push(starRating);
    //   }
    // }
    console.log('click event', starFilter);
  };

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

  const ratingContainer = {
    'position': 'relative',
    'width': '75%',
    'height': '10px',
    'backgroundColor': 'lightGray'
  };

  const filledBar = {
    'width': `${percentageRated || 0}%`,
    'height': '10px',
    'backgroundColor': 'green',

  };

  return (
    <div>
      <div onClick={() => handleStarClick(starRating)}
      >{starRating} stars </div>
      <div style={ratingContainer}>
        <div style={filledBar}></div>
      </div>
      <div>
        {rating} reviews
      </div>
    </div>
  );
}