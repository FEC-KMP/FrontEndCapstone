import React, { useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductIdContext from '../../ProductIdContext.jsx';
import { Modal, Button } from 'react-bootstrap';

const emptyState = {
  // eslint-disable-next-line camelcase
  product_id: 0,
  rating: 0,
  summary: 'This is Kirk testing',
  body: null,
  recommend: null,
  name: null,
  email: null,
  photo: [],
  characteristics: {}
};

// eslint-disable-next-line camelcase
export default function WriteReview ({ postReview, handleCloseModal, showWriteReview, productInfo, product_id }) {
  var {productId, updateProductId} = useContext(ProductIdContext);
  var [postFormData, setPostFormData] = useState(emptyState);

  handlePostReview = (event) => {
    postReview(postFormData, (err) => {
      if (err) {
        console.log('err in handlePostReview', err);
      }
      console.log('posted review');
      handleCloseModal();
    });
  };
  return (
    <div>
      <Modal show={showWriteReview} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Write Your Review</h3>
            <h5>About the {}</h5>
          </Modal.Title>a
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="reviewForm.ControlInputRating">
              <Form.Label>
                Overall Rating
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlePostReview}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
