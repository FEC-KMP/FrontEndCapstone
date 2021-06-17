import React, { useContext, useState, useEffect } from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';
import ProductIdContext from '../../../context/ProductIdContext.jsx';
import axios from 'axios';
import Entry from '../List/Entry.jsx';

export default function ReviewsContainer ({ reviewsInfo, postReview}) {
  if (!reviewsInfo) { return 'data not found'; }

  const [count, setCount] = useState(2);

  const handleShow = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <div>
        <h5>{reviewsInfo.results.length} Total Reviews </h5>
      </div>
      <div>
        <div>
          {reviewsInfo.results.slice(0, count).map((review) => {
            return (
              <Entry key={review.review_id} review={review}/>
            );
          })}
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
