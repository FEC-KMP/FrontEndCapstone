import React from 'react';

var ProductInformation = () => {
  return (
    <div className="ProductInformation">
      <div className="ProductRating">
        <span id="ProductStarRating">stars  </span>
        <span id="ProductReviewLink">Read all reviews </span>
      </div>
      <div className="ProductCategory">Product Category</div>
      <div className="ProductTitle">Product Title</div>
      <div className="price">Price</div>
    </div>
  );
};

export default ProductInformation;