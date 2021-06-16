import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import ProductOverview from './ProductOverview.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
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


var ProductMain = (props) => {

  var [productInfo, updateProductInfo] = useState();
  var [currentStyleObj, updateCurrentStyleObj] = useState();
  var [styleInfo, updateStyleInfo] = useState();
  var { productId, updateProductId } = useContext(ProductIdContext);

  var getProductInfo = (productId) => {
    axios.get(`/products/${productId}/`)
      .then((results) => {
        //add list to state
        console.log('C: productMain getProductInfo get/products/:productId success: ', results.data);
        updateProductInfo(results.data);
      })
      .catch((err) => {
        console.log('C: productMain getProductInfo get/products/:productiD/  err: ', err);
      });
  };


  var getStyleInfo = (productId, callback) => {
    axios.get(`/products/${productId}/styles`)
      .then((results) => {
        //add list to state
        console.log('C: productMain get/getStyleInfo get/products/:productiD/styles  success');
        updateStyleInfo(results.data.results);
        updateCurrentStyleObj(results.data.results[0]);
      })
      .catch((err) => {
        console.log('C: productMain getStyleInfo get/products/:productiD/styles err: ', err);
      });
  };

  useEffect(() => {
    getProductInfo(productId);
    getStyleInfo(productId);
  }, [productId]);


  var onStyleThumbnailClick = (styleId) => {
    var newStyleObj;
    styleInfo.forEach((styleObj) => {
      if (styleObj.style_id === styleId) {
        newStyleObj = styleObj;
      }
    });
    updateCurrentStyleObj(newStyleObj);
  };

  var onCaroselThumbnailClick = () => {

  };



  return (
    <div className="ProductDetail row">
      <div className="col-lg-7">
        <ImageGallery currentStyleObj={currentStyleObj} />
      </div>
      <div className="col-lg-5">
        <ProductInformation currentStyleObj={currentStyleObj} productInfo={productInfo} />
        <StyleSelector styleInfo={styleInfo} onStyleThumbnailClick={onStyleThumbnailClick}/>
        <AddToCart currentStyleObj={currentStyleObj} />
      </div>
      <div className="col-lg-12">
        <ProductOverview productInfo={productInfo} />
      </div>
    </div>
  );
};



export default ProductMain;