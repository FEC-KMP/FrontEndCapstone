import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import Body from './Body.jsx';
import Response from './Response.jsx';
import Recommend from './Recommend.jsx';
import formatDate from '../../DateFormat.jsx';
import StarRatings from 'react-star-ratings';


const Entry = ({ review }) => {
  return (
    <div className="border-bottom entry">
      <div className="starsNameDate row">
        <div >
          <StarRatings
            rating={review.rating}
            starRatedColor="grey"
            numberOfStars={5}
            name='rating'
            starDimension="12px"
          />
        </div>
        <div className="nameAndDate col">
          {review.reviewer_name}, {formatDate(review.date)}
        </div>
      </div>
      <ReviewSummary reviewSummary={review.summary} />
      <Body body={review.body} />
      <Response response={review.response} />
      <Recommend recommend={review.recommend} />
      <div className="helpfulReport row">
        <div className="rHelpful">
          Helpful?
          <a className="helpfulYes">
            Yes
          </a>
        </div>
        ({review.helpfulness}) |
        <div className="report">
          <a>
            Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default Entry;