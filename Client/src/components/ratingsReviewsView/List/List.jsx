import React from 'react';
import Entry from './Entry.jsx';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsContainer from '../Containers/ReviewsContainer.jsx';

const List = ({ reviews }) => {
  let reviewsArray = reviews.results;
  return (
    <div>
      {reviewsArray.map((review) => {
        return (
          <Entry key={review.review_id} review={review}/>
        );
      })}
    </div>
  );
};

export default List;