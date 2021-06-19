import React from 'react';

const ReviewSummary = ({ reviewSummary }) => {
  //some sort of logic here conditioning to just do the first 60 characters if clicked on
  return (
    <div>
      <p>{reviewSummary}</p>
    </div>
  );
};

export default ReviewSummary;