import react from 'react';
import getListInfoProducts from '../../context/ApiContext.jsx';
import ReviewsList from './list/ReviewsList.jsx';
import App from '../App.jsx';

const RatingsAndReviews = ({ getListOfReviews }) => {
  return (
    <div>
      <ReviewsList reviews={reviews}/>
    </div>
  );
};

export default RatingsAndReviews;