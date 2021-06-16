import React, { useContext, useState, useEffect } from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';
import ProductIdContext from '../../ProductIdContext.jsx';
import axios from 'axios';
import Entry from '../List/Entry.jsx';
import ReviewContext from '../../ReviewContext.jsx';

export default function ReviewsContainer ({ reviewsInfo, postReview}) {
  if (!reviewsInfo) { return 'data not found'; }

  var { starFilter, updateStarFilter } = useContext(ReviewContext);
  const [count, setCount] = useState(2);

  // const [filterRating, updateFilterRating] = useState(false);

  const handleShow = () => {
    setCount(count + 2);
  };
  let reviewEntry;
  console.log('starFilter', starFilter);
  if (!starFilter.length) {
    reviewEntry = reviewsInfo.results.slice(0, count).map((review) => {
      return (
        <Entry key={review.review_id} review={review}/>
      );
    });
  } else {
    for (var i = 0; i < starFilter.length; i ++) {
      console.log('reviewsInfoRating', reviewsInfo.results);
      let ratingFilteredArray = reviewsInfo.results.filter((filtered) => {
        return filtered.rating === Number(starFilter[i]);
      });
      console.log('filtered array', ratingFilteredArray);
      console.log('current star', Number(starFilter[i]));
      reviewEntry = ratingFilteredArray.slice(0, count).map((review) => {
        return (
          <Entry key={review.review_id} review={review}/>
        );
      });
    }
  }
  return (
    <div>
      <div>
        <h5>{reviewsInfo.results.length} Total Reviews </h5>
      </div>
      <div>
        <div>
          {reviewEntry}
        </div>
      </div>
      <div>
        <button variant="primary" onClick={handleShow}>
          More Reviews
        </button>
        <button>
          Add a Review +
          <div>
            <WriteReview postReview={postReview}/>
          </div>
        </button>
      </div>
    </div>
  );
}
