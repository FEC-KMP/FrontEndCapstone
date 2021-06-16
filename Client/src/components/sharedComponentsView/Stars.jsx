import React from 'react';
import axios from 'axios';
const Stars = ({ rating }) => {

  return (
    <div>
      <span>*** {rating}</span>
    </div>
  );
};

export default Stars;