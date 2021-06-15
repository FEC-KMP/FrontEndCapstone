import React from 'react';
import axios from 'axios';

const emptyState = {
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
export default class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
  }

  render() {
    return (
      <div>
        <button>
          More Reviews
        </button>
        <button>
          Add a Review +
        </button>
      </div>
    );
  }
}