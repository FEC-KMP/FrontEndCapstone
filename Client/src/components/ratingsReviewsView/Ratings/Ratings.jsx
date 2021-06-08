import React from 'react';
import axios from 'axios';
import Average from './Average.jsx';
import Characteristics from './Characteristics.jsx';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="ratings">
        <div>
          <Average />
        </div>
        <div>
          <Characteristics ratings={this.props.ratings}/>
        </div>
      </div>
    );
  }
}