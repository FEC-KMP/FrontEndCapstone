import React, { useContext, useState, useEffect } from 'react';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import WriteReview from '../WriteReview/WriteReview.jsx';
import ProductIdContext from '../../../context/ProductIdContext.jsx';
import axios from 'axios';
import Entry from '../List/Entry.jsx';
import ReviewContext from '../../../context/ReviewContext.jsx';

export default function ReviewsContainer ({ reviewsInfo, postReview, productId, productName }) {
  if (!reviewsInfo) { return 'data not found'; }

  var { starFilter, updateStarFilter } = useContext(ReviewContext);
  const [count, setCount] = useState(2);
  const [showWriteReview, setShowWriteReview] = useState(false);


  const handleShow = () => {
    setCount(count + 2);
  };

  const handleShowModal = () => {
    setShowWriteReview(true);
  };
  const handleCloseModal = () => {
    setShowWriteReview(false);
  };

  let sortedBy;
  const sortedByStars = (starFilter) => {
    console.log('hitting this');
    if (starFilter.length) {
      return sortedBy = 'Sorted By ' + starFilter[starFilter.length - 1] + ' Star Reviews';
    }
  };
  sortedByStars(starFilter);


  let reviewEntry;
  let totalReviews;
  let metaDataLies;
  if (!starFilter.length) {
    totalReviews = reviewsInfo.results.length;
    reviewEntry = reviewsInfo.results.slice(0, count).map((review) => {
      return (
        <Entry key={review.review_id} review={review}/>
      );
    });
  } else {
    for (var i = 0; i < starFilter.length; i ++) {
      let ratingFilteredArray = reviewsInfo.results.filter((filtered) => {
        return filtered.rating === Number(starFilter[i]);
      });
      if (!ratingFilteredArray.length) {
        metaDataLies = ', the meta data lies, ';
      }
      totalReviews = ratingFilteredArray.length;
      reviewEntry = ratingFilteredArray.slice(0, count).map((review) => {
        return (
          <Entry key={review.review_id} review={review}/>
        );
      });
    }
  }
  return (
    <div>
      <div>
        <h5>{totalReviews} Total Reviews {metaDataLies} {sortedBy}</h5>
      </div>
      <div>
        <div>
          {reviewEntry}
        </div>
      </div>
      <div>
        <button variant="primary" onClick={handleShow}>
          More Reviews
        </button>
        <button onClick={handleShowModal}>
          Add a Review +
        </button>
        <div>
          <WriteReview
            postReview={postReview}
            handleCloseModal={handleCloseModal}
            showWriteReview={showWriteReview}
            reviewsInfo={reviewsInfo}
            product_id={productId}
            productName={productName}
          />
        </div>
      </div>
    </div>
  );
}
