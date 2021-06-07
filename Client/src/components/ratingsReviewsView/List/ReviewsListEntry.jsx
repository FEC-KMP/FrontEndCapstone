import react from 'react';
import Summary from './Summary.jsx';
import Body from './Body.jsx';
import Response from './Response.jsx';
import Recommend from './Recommend.jsx';
import Stars from '../sharedComponentsView/Stars.jsx';

const ReviewsListEntry = ({ review }) => {
  return (
    <div>
      <Stars rating={review.rating}/>
      <Summary summary={review.summary}/>
      <Body body={review.body}/>
      <Response response={review.response}/>
      <Recommend recommend={review.recommend}/>
    </div>
  );
};

export default ReviewsListEntry;