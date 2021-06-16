import React, { useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductIdContext from '../../ProductIdContext.jsx';

//align these with the get request data
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

export default function WriteReview ({ postReview }) {
  var {productId, updateProductId} = useContext(ProductIdContext);
  var [postFormData, setPostFormData] = useState(emptyState);

  return (
    <div>

    </div>
  );
}
