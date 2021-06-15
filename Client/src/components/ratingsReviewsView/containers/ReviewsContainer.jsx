import React, { useContext, useState, useEffect } from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import List from '../List/List.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';
import ProductIdContext from '../../ProductIdContext.jsx';
import axios from 'axios';

export default function ReviewsContainer ({ reviewsInfo, postReview }) {
  if (!reviewsInfo) { return 'data not found'; }
  console.log(reviewsInfo);

  return (
    <div>
      <div>
        <h5>{reviewsInfo.results.length} Total Reviews </h5>
      </div>
      <div>
        <List reviewsInfo={reviewsInfo}/>
      </div>
      <div>
        <WriteReview postReview={postReview}/>
      </div>
    </div>
  );
}
