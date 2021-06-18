import React from 'react';

//stars based on rating
//clickhandler for read all reviews --> reviews section
//
var ProductInformation = ({currentStyleObj, productInfo}) => {
  if (!currentStyleObj || !productInfo) { return 'data not found'; }
  return (
    <div className="ProductInformation">
      <div className="ProductRating">
        <span id="ProductStarRating">stars  </span>
        <a id="ProductReviewLink" href='#RatingsContainer'>Read all reviews </a>
      </div>
      <div className="ProductCategory">{productInfo.category.toUpperCase()}</div>
      <div className="ProductTitle">{productInfo.name}</div>
      <div className="price">{currentStyleObj.original_price}</div>
    </div>
  );
};

export default ProductInformation;