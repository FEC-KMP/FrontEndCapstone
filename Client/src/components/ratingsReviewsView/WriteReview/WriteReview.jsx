import React from 'react';
import axios from 'axios';

export default class WriteReview extends React.Component {
  static emptyState() {
    return {
      overallRating: 0,
      recommend: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: '',
      photos: [],
      nickname: '',
      email: '',

    };
  }
  constructor(props) {
    super(props);
    this.state = WriteReview.emptyState();
  }

  render() {
    return (
      <div>
        <button>
          Add a Review +
        </button>
      </div>
    );
  }
}