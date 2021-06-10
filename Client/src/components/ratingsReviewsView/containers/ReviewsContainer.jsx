import React from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import List from '../List/List.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';

export default function ReviewsContainer ({ }) {
  return (
    <div>
      <div>
        <h5>{this.props.reviews.results.length} Total Reviews, sorted by the arbitrary indulgences of the ignorant</h5>
      </div>
      <div>
        <List reviews={this.props.reviews}/>
      </div>
      <div>
        <WriteReview />
      </div>
    </div>
  );
}
