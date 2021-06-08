import React from 'react';

const Stars = ({ rating }) => {
  //a whole bunch of logic here determining the rating and then converting that to a
  //specific star amount image
  return (
    <div>
      <span>*** {rating}</span>
    </div>
  );
};

export default Stars;