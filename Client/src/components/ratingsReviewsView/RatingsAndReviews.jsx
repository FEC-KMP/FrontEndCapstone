import React from 'react';
import List from './List/List.jsx';
import reviews from './List/dummyData.js';
import ReviewsContainer from './Containers/ReviewsContainer.jsx';
import RatingsContainer from './Containers/RatingsContainer.jsx';
import ratings from './Ratings/dummyMeta.js';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviews,
      ratings: ratings
    };
  }

  render() {

    return (
      <div>
        <div className="RatingsAndReviews row">
          <h4>Ratings & Reviews</h4>
          <div id="RatingsContainer">
            <div className="col-lg-5">
              <RatingsContainer ratings={this.state.ratings} />
            </div>
          </div>
          <div id="ReviewsContainer">
            <div className="col-lg-7">
              <ReviewsContainer reviews={this.state.reviews} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;