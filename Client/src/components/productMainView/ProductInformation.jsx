import React from 'react';

//stars based on rating
//clickhandler for read all reviews --> reviews section
//
var ProductInformation = ({styleInfo, productInfo}) => {
  return (
    <div className="ProductInformation">
      <div className="ProductRating">
        <span id="ProductStarRating">stars  </span>
        <span id="ProductReviewLink">Read all reviews </span>
      </div>
      <div className="ProductCategory">{productInfo.category}</div>
      <div className="ProductTitle">{productInfo.name}</div>
      <div className="price">{styleInfo['original_price']}</div>
    </div>
  );
};

export default ProductInformation;