import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsContainer from '../Containers/ReviewsContainer.jsx';

const ReviewsList = ({ reviews }) => {
  let reviewsArray = reviews.results;
  console.log('reviews in list', reviewsArray);
  return (
    <div>
      {reviewsArray.map((review) => {
        return (
          <ReviewsListEntry key={review.review_id} review={review}/>
        );
      })};
    </div>
  );
};

export default ReviewsList;