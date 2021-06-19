/* eslint-disable camelcase */
import React, { useContext, useState, useEffect } from 'react';
import ReviewsContainer from './containers/ReviewsContainer.jsx';
import RatingsContainer from './containers/RatingsContainer.jsx';
import axios from 'axios';
import ProductIdContext from '../../context/ProductIdContext.jsx';
import Row from 'react-bootstrap/Row';
import reviewContext from '../../context/ReviewContext.jsx';




var markReviewHelpful = (reviewId, callback) => {
  axios.put(`/rnr/reviews/${reviewId}/helpful`)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      console.log('C: RnR markReviewHelpful err', err);
      callback(err, null);
    });
};

var reportReview = (reviewId, callback) => {
  axios.put(`/reviews/${reviewId}/report`)
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      console.log('C: RnR reportReview err', err);
      callback(err, null);
    });
};

const RatingsAndReviews = (props) => {
  var {productId, updateProductId, productName, updateProductName} = useContext(ProductIdContext);
  var [reviewsInfo, updateReviewsInfo] = useState();
  var [metaInfo, updateMetaInfo] = useState();
  var [starFilter, updateStarFilter] = useState([]);

  var getReviewInfo = (productId, page = 1, count = 1000, sort = 'helpful') => {
    axios.get('/rnr/reviews', {params: {
      productId: productId,
      page: page,
      count: count,
      sort: sort
    }})
      .then((result) => {
        updateReviewsInfo(result.data);
      })
      .catch((err) => {
        console.log('C: RnR getReviewInfo err', err);
      });
  };

  var getReviewMeta = (productId) => {
    axios.get('/rnr/reviews/meta', {params: {
      product_id: productId
    }})
      .then((result) => {
        updateMetaInfo(result.data);
      })
      .catch((err) => {
        console.log('C: RnR getReviewMeta err', err);
      });
  };

  var postReview = (body, callback) => {
    axios.post('/rnr/reviews', {body})
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        console.log('C: RnR postReview err', err);
        callback(err, null);
      });
  };


  useEffect(() => {
    getReviewInfo(productId);
    getReviewMeta(productId);
  }, [productId]);


  return (
    <div>
      <reviewContext.Provider value={{
        starFilter,
        updateStarFilter,
      }
      }>
        <div className="RatingsAndReviews row">
          <h4>Ratings & Reviews</h4>
          <div id="RatingsContainer">
            <div className="col-lg-5">
              <RatingsContainer metaInfo={metaInfo} />
            </div>
          </div>
          <div id="ReviewsContainer row">
            <div className="col-lg-15">
              <ReviewsContainer
                reviewsInfo={reviewsInfo}
                postReview={postReview}
                productId={productId}
                productName={productName}
              />
            </div>
          </div>
        </div>
      </reviewContext.Provider>
    </div>
  );
};

export default RatingsAndReviews;
