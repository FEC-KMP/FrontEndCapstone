import React from 'react';

const ReviewSummary = ({ summary }) => {
  //some sort of logic here conditioning to just do the first 60 characters if clicked on
  return (
    <div>
      <p>{summary}</p>
    </div>
  );
};

export default ReviewSummary;