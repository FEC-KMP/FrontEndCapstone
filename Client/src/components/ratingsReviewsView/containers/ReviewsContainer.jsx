import React from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewsList from '../List/ReviewsList.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';

export default class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="reviewslist">
          <ReviewsList reviews={this.props.reviews}/>
        </div>
        <div className="writeReview">
          <WriteReview />
        </div>
      </div>
    );
  }
}
