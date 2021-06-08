import React from 'react';

var ProductOverview = ({ productInfo }) => {
  return (
    <div className="ProductOverview row">
      <div className="ProductOverviewHeader col-lg-7">{productInfo.slogan}</div>
      <div className="ProductOverviewText col-lg-7"> {productInfo.description}</div>
      <div className="socialMediaButtons col-lg-5" >
        Social Media Buttons
      </div>
    </div>
  );
};

export default ProductOverview;