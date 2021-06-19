import React from 'react';

var ProductOverview = ({ productInfo }) => {
  if (!productInfo) { return 'data not found'; }
  return (
    <div className="ProductOverview row">
      <div className="ProductOverviewHeader col-lg-7">{productInfo.slogan}</div>
      <div className="ProductOverviewText col-lg-7"> {productInfo.description}</div>
    </div>
  );
};

export default ProductOverview;