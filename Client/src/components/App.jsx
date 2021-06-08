import React from 'react';
import QuestionsAnswers from './QuestionsAnswersView/QuestionsAnswers.jsx';
import { getListOfProducts, getListInfoProducts, getListOfReviews, getListOfQuestions } from '../context/ApiContext.jsx';
import ProductMain from './productMainView/productMain.jsx';
<<<<<<< HEAD
import RatingsAndReviews from './ratingsReviewsView/RatingsAndReviews.jsx';

=======
>>>>>>> 587cb0cfa966a84c7ecb5b77989cdb9a61593ebd
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListProducts: []

    };
  }

  componentDidMount() {
    const end = {
      listProducts: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5',
      listInfo: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078',
      reviews: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews?count=5&sort=helpfulness&product_id=18078',
      listQuestions: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/?product_id=5&count=5'
    };
    getListOfProducts(end.listProducts);
    getListInfoProducts(end.listInfo);
    getListOfReviews(end.reviews);
    getListOfQuestions(end.listQuestions);
  }
  render() {
    return (
      <div>
        <ProductMain />
        <h1>QUESTIONS AND ANSWERS</h1>
        <QuestionsAnswers />
        <div className="container">
          <div className="logoBanner"> logo banner</div></div>
        <div>
          <RatingsAndReviews />
      </div>
    );
  }

}

export default App;