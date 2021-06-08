import React from 'react';
import ReviewsList from './list/ReviewsList.jsx';
import reviews from './List/dummyData.js';
import ReviewsContainer from './Containers/ReviewsContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: reviews
    };
  }

  render() {

    return (
      <div>
        <div>
          <ReviewsContainer reviews={this.state.reviews}/>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;