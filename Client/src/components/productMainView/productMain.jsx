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
// axios.get('https://httpbin.org/get', { params: { answer: 42 } });

// Equivalent to:
// axios.get('https://httpbin.org/get?answer=42')

//POST '/reviews'
//Body Parameter
//data object

var getProductInfo = (productId, callback) => {
  axios.get(`/products/${productId}/`)
    .then((result) => {
      //add list to state
      // console.log('C: productMain getProductInfo get/products/:productId success');
      callback(null, result);
    })
    .catch((err) => {
      console.log('C: productMain getProductInfo get/products/:productiD/  err: ', err);
      callback(err, null);
    });
};


var getStyleInfo = (productId, callback) => {
  axios.get(`/products/${productId}/styles`)
    .then((result) => {
      //add list to state
      // console.log("C: productMain get/getStyleInfo get/products/:productiD/styles  success");
      callback(null, result);
    })
    .catch((err) => {
      console.log('C: productMain getStyleInfo get/products/:productiD/styles err: ', err);
      callback(err, null);
    });
};

var ProductMain = (props) => {
  var {productId, updateProductId} = useContext(ProductIdContext);

  var [productInfo, updateProductInfo] = useState();
  var [currentThumbnail, updateCurrentThumbnail] = useState();
  var [currentStyleObj, updateCurrentStyleObj] = useState();
  var [styleInfo, updateStyleInfo] = useState();

  useEffect(() => {
    getProductInfo(productId, (err, results) => {
      if (err) {
        console.log('C: productMain productMain useEffect getProductInfo  err: ', err);
      } else {
        updateProductInfo(results.data);
      }

    });

    getStyleInfo(productId, (err, results) => {
      if (err) {
        console.log('C: productMain productMain useEffect getProductInfo  err: ', err);
      } else {
        updateStyleInfo(results.data.results);
        updateCurrentStyleObj(results.data.results[0]);
      }
    });

  }, [productId]);



  //currently selected thumbnail
  //currently selected style
  //container for product info
  //container for styles info

  return (
    <div className="ProductDetail row">
      <div className="col-lg-7">
        <ImageGallery currentStyleObj={currentStyleObj} currentThumbnail={currentThumbnail}/>
      </div>
      <div className="col-lg-5">
        <ProductInformation currentStyleObj={currentStyleObj} productInfo={productInfo}/>
        <StyleSelector currentStyleObj={currentStyleObj} productInfo={productInfo}/>
        <AddToCart currentStyleObj={currentStyleObj}/>
      </div>
      <div className="col-lg-12">
        <ProductOverview productInfo={productInfo}/>
      </div>
    </div>
  );
};



export default ProductMain;