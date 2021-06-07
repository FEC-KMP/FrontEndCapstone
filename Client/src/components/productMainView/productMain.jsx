import React from 'react';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

var ProductMain = (props) => {
  return (
    <div className="ProductDetail">
      <ImageGallery />
      <ProductInformation />
      <StyleSelector />
      <AddToCart />
      <ProductOverview />
    </div>
  );
};

export default ProductMain;