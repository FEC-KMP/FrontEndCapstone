import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductIdContext from '../ProductIdContext.jsx';

// var getListOfProducts = () => {
//   var params = {
//     page: 1,
//     count: 5
//   };
//   axios.get('/products', { params })
//     .then((result) => {
//       //add list to state
//       console.log("get/products success");
//       return result;
//     })
//     .catch((err) => {
//       console.log('getListOfProducts err: ', err);
//     });
// };

//'/products/:product_id/'
//URL Parameters
//template literal

//'/reviews/meta'
//Query Parameter
//const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`

//POST '/reviews'
//Body Parameter
//data object

var getProductInfo = (productId, callback) => {
  axios.get(`/products/${productId}/`)
    .then((result) => {
      //add list to state
      console.log("get/getProductInfo success");
      callback(null, results);
    })
    .catch((err) => {
      console.log('getProductInfo err: ', err);
      callback(err, null);
    });
};


var getStyleInfo = (productId, callback) => {
  axios.get(`/products/${productId}/styles`)
    .then((result) => {
      //add list to state
      console.log("get/getStyleInfo success");
      callback(null, results);
    })
    .catch((err) => {
      console.log('getStyleInfo err: ', err);
      callback(err, null);
    });
};

var ProductMain = (props) => {
  var {productId, updateProductId} = useContext(ProductIdContext);

  var [productInfo, updateProductInfo] = useState();
  useEffect(() => {
    getProductInfo(productId, (err, results) => {
      if (err) {
        console.log('getProductInfo useEffect err: ', err);
      } else {
        console.log('productinfo: ', results);
        updateProductInfo(results);
      }
    });
  }, [productId]);


  var [styleInfo, updateStyleInfo] = useState();
  useEffect(() => {
    getStyleInfo(productId, (err, results) => {
      if (err) {
        console.log('getProductInfo useEffect err: ', err);
      } else {
        console.log('styleinfo: ', results);
        updateStyleInfo(results);
      }
    });
  }, [productId]);

  var [currentThumbnail, updateCurrentThumbnail] = useState();

  var [currentStyle, updateCurrentStyle] = useState();

  //currently selected thumbnail
  //currently selected style
  //container for product info
  //container for styles info

  return (
    <div className="ProductDetail row">
      <div className="col-lg-7">
        <ImageGallery styleInfo={styleInfo} currentThumbnail={currentThumbnail}/>
      </div>
      <div className="col-lg-5">
        <ProductInformation styleInfo={styleInfo} productInfo={productInfo}/>
        <StyleSelector styleInfo={styleInfo} productInfo={productInfo}/>
        <AddToCart styleInfo={styleInfo} currentStyle={currentStyle}/>
      </div>
      <div className="col-lg-12">
        <ProductOverview productInfo={productInfo}/>
      </div>
    </div>
  );
};



export default ProductMain;