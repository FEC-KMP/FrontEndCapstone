import react from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import RatingsAndReviews from '../RatingsAndReviews';

const ReviewsList = {( reviews )} => {
  let reviewsArray = reviews;

  return(
    <div>
      {reviewsArray.map(review =>
        <ReviewsListEntry key={review.review_id} review={review}/>
      )}
    </div>
  )
}

export default ReviewsList;