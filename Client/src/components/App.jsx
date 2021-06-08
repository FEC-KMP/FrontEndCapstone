import React, { createContext, useContext, useState } from 'react';
import QuestionsAnswers from './QuestionsAnswersView/QuestionsAnswers.jsx';
import { getListOfProducts, getListInfoProducts, getListOfReviews, getListOfQuestions } from '../context/ApiContext.jsx';
import ProductMain from './productMainView/productMain.jsx';
import GITHUB_API_KEY from '../api/githubApi.js';
import RatingsAndReviews from './ratingsReviewsView/RatingsAndReviews.jsx';
import ProductIdContext from './ProductIdContext.jsx';



var App = () => {
  const [productId, updateProductId] = useState(18078);
  return (
    <ProductIdContext.Provider value={{productId, updateProductId}}>
      <div className="container">
        <div className="logoBanner"> logo banner</div>
        <ProductMain />
        <h1>QUESTIONS AND ANSWERS</h1>
        <QuestionsAnswers />
        <div>
          <RatingsAndReviews />
        </div>
      </div>
    </ProductIdContext.Provider>
  );
  // }

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