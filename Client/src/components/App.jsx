import React, { createContext, useContext, useState } from 'react';
import QuestionsAnswers from './QuestionsAnswersView/QuestionsAnswers.jsx';
import { getListOfProducts, getListInfoProducts, getListOfReviews, getListOfQuestions } from '../context/ApiContext.jsx';
import ProductMain from './productMainView/productMain.jsx';
import GITHUB_API_KEY from '../api/githubApi.js';
import RatingsAndReviews from './ratingsReviewsView/RatingsAndReviews.jsx';
import NavBar from './NavBar.jsx';
import ProductIdContext from '../context/ProductIdContext.jsx';
import {QAProvider} from '../context/QAContext.jsx';



var App = () => {
  const [productId, updateProductId] = useState(18078);
  const [productName, updateProductName] = useState('Camo Onesie');

  return (
    <ProductIdContext.Provider value={{ productId, updateProductId, productName, updateProductName }}>
      <div className="container">
        <NavBar />
        <ProductMain />
        <QAProvider>
          <QuestionsAnswers />
        </QAProvider>
        <div>
          <RatingsAndReviews />
        </div>
      </div>
    </ProductIdContext.Provider>
  );

};

export default App;

// componentDidMount() {
//   const end = {
//     listProducts: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5',
//     listInfo: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078',
//     reviews: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews?count=5&sort=helpfulness&product_id=18078',
//     listQuestions: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/?product_id=5&count=5'
//   };
//   getListOfProducts(end.listProducts);
//   getListInfoProducts(end.listInfo);
//   getListOfReviews(end.reviews);
//   getListOfQuestions(end.listQuestions);
// }
// render() {