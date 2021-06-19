import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import Body from './Body.jsx';
import Response from './Response.jsx';
import Recommend from './Recommend.jsx';
import formatDate from '../../DateFormat.jsx';
import StarRatings from 'react-star-ratings';


const Entry = ({ review }) => {
  return (
    <div className="border-bottom">
      <StarRatings
        rating={review.rating}
        starRatedColor="blue"
        numberOfStars={5}
        name='rating'
        starDimension="10px"
      />
      <div className="nameAndDate">
        {review.reviewer_name}, {formatDate(review.date)}
      </div>
      <ReviewSummary reviewSummary={review.summary}/>
      <Body body={review.body}/>
      <Response response={review.response}/>
      <Recommend recommend={review.recommend}/>
      <div>
        <div className="helpful">
          <button>
            helpful?
          </button>
        </div>
        <div>
          <button>
            report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entry;