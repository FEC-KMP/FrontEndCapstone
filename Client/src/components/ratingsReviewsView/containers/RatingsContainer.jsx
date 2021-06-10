import React from 'react';
import Ratings from '../Ratings/Ratings.jsx';

export default function RatingsContainer ({ }) {

  return (
    <div>
      <Ratings ratings={this.props.ratings}/>
    </div>
  );
}