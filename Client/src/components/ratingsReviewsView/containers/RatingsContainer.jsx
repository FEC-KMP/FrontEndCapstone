import React from 'react';
import Ratings from '../Ratings/Ratings.jsx';

export default class RatingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Ratings ratings={this.props.ratings}/>
      </div>
    );
  }
}