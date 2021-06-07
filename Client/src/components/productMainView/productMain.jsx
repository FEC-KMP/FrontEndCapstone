import React from 'react';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

var ProductMain = (props) => {
  return (
    <div className="ProductDetail row">
      <div className="col-lg-7">
        <ImageGallery />
      </div>
      <div className="col-lg-5">
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
      </div>
      <div className="col-lg-12">
        <ProductOverview />
      </div>
    </div>
  );
};

var getProducts = ()=> {
  axios.get('/products')
};

export default ProductMain;