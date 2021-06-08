import React, { useState, useEffect, useContext } from 'react';
import SearchQAForm from './SearchQAForm.jsx';
import QAList from './QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
import ProductIdContext from '../ProductIdContext.jsx';
import axios from 'axios';

var getListOfQuestions = (productId, callback, page = 1, count = 5) => {
  //product_id, page, count => parameters
  var params = { productId, page, count };
  console.log('getListOfQuestions params: ', params);
  axios.get('/qa/questions/', { params })
    .then((results) => {
      console.log('getListOfQuestions get/qa/questions result: ', result);
      callback(null, results);
    })
    .catch((err) => {
      console.log('getListOfQuestions get/qa/questions err: ', err);
      callback(err, null);
    });
};

var getListOfAnswers = () => {

};

var addAnswer = () => {

  // axios.post()
};

const QuestionsAnswers = () => {
  var { productId, updateProductId } = useContext(ProductIdContext);
  var [questionsList, updateQuestionsList] = useState();
  useEffect(() => {
    getListOfQuestions(productId, (err, results) => {
      if (err) {
        console.log('QuestionsAnswers useEffect getListOfQuestions err: ', err);
      } else {
        console.log('QuestionsAnswers useEffect getListOfQuestions results: ', results);
        updateQuestionsList(results); //FIXME: possible results.data....?
      }
    });
  }, [productId]);
  return (
    <div className="questionsContainer">
      <h1>QUESTIONS AND ANSWERS</h1>
      <SearchQAForm />
      <QAList questionsList={questionsList} />
      <AskQuestionForm />
    </div>
  );
};
export default QuestionsAnswers;