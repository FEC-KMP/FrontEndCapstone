import React from 'react';
import List from './List/List.jsx';
import reviews from './List/dummyData.js';
import ReviewsContainer from './Containers/ReviewsContainer.jsx';
import RatingsContainer from './Containers/RatingsContainer.jsx';
import ratings from './Ratings/dummyMeta.js';

class RatingsAndReviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: reviews,
      ratings: ratings
    };
  }

  render() {

    return (
      <div>
        <h4>Ratings & Reviews</h4>
        <div className="RatingsAndReviews row">
          <div className="RatingsContainer">
            <div className="col-lg-3">
              <RatingsContainer ratings={this.state.ratings}/>
            </div>
          </div>
          <div className="ReviewsContainer">
            <div className="col-lg-15">
              <ReviewsContainer reviews={this.state.reviews}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsAndReviews;