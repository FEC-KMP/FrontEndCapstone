import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import Body from './Body.jsx';
import Response from './Response.jsx';
import Recommend from './Recommend.jsx';
import Stars from '../../sharedComponentsView/Stars.jsx';
import List from './List.jsx';

const Entry = ({ review }) => {
  return (
    <div class="border">
      <Stars rating={review.rating}/>
      <div className="nameAndDate">
        User: {review.reviewer_name}, {review.date}
      </div>
      <ReviewSummary reviewSummary={review.summary}/>
      <Body body={review.body}/>
      <Response response={review.response}/>
      <Recommend recommend={review.recommend}/>
      <div className="helpfulAndReport">
        <button>
          helpful?
        </button>
        <button>
          report
        </button>
      </div>
    </div>
  );
};

export default Entry;