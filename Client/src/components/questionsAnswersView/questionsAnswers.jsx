import React, { useState, useEffect, useContext } from 'react';
import SearchQAForm from './SearchQAForm.jsx';
import QAList from './QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
import ProductIdContext from '../ProductIdContext.jsx';
import axios from 'axios';

var getListOfQuestions = (productId, callback, page = 1, count = 5) => {
  //product_id, page, count => parameters
  var params = { productId, page, count };
  // console.log('C: getListOfQuestions params: ', params);
  axios.get('/qa/questions/', { params })
    .then((results) => {
      // console.log('getListOfQuestions get/qa/questions result: ', results);
      callback(null, results.data.results);
    })
    .catch((err) => {
      console.log('C: getListOfQuestions get/qa/questions err: ', err);
      callback(err, null);
    });
};

var getListOfAnswers = (questionId, callback, page = 1, count = 5) => {
  //product_id, page, count => parameters
  const params = { page, count };
  // console.log('C: getListOfQuestions params: ', params);
  axios.get(`/qa/questions/${questionId}/answers`, { params })
    .then((results) => {
      // console.log('getListOfQuestions get/qa/questions result: ', results);
      callback(null, results.data.results);
    })
    .catch((err) => {
      console.log('C: getListOfQuestions get/qa/questions err: ', err);
      callback(err, null);
    });
};

//FIXME: may want to add answer to questionssList
var addQuestion = (body, name, email, productId, callback) => {
  var data = {
    body: body,
    name: name,
    email: email,
    product_id: productId
  };
  axios.post('/qa/questions', { data })
    .then((results) => {
      console.log('C: addQuestion get/qa/questions success results: ', results);
      callback(null, results); //FIXME: results?
    })
    .catch((err) => {
      console.log('C: addQuestion get/qa/questions err: ', err);
      callback(err, null);
    });
};

//FIXME: may want to add answer to answersList
var addAnswer = (body, name, email, photos, questionId, callback) => {
  const data = {body, name, email, photos};
  axios.post(`/qa/questions/${questionId}/answers`, { data })
    .then((results) => {
      console.log('C: addAnswer get/qa/questions/:questions_id/answers success results: ', results);
      callback(null, results); //FIXME: results?
    })
    .catch((err) => {
      console.log('C: addAnswer get/qa/questions/:questions_id/answers err: ', err);
      callback(err, null);
    });
};


const QuestionsAnswers = () => {
  var { productId, updateProductId } = useContext(ProductIdContext);
  var [questionsList, updateQuestionsList] = useState();
  var [answersList, updateAnswersList] = useState();
  useEffect(() => {
    getListOfQuestions(productId, (err, results) => {
      if (err) {
        console.log('C: QuestionsAnswers useEffect getListOfQuestions err: ', err);
      } else {
        // console.log('C: QuestionsAnswers useEffect getListOfQuestions results: ', results);
        updateQuestionsList(results);
      }
    });

    //FIXME: this one is based on questionId, so unsure how you want to handle that Phong
    getListOfAnswers(questionId, (err, results) => {
      if (err) {
        console.log('C: QuestionsAnswers useEffect getListOfAnswers err: ', err);
      } else {
        console.log('C: QuestionsAnswers useEffect getListOfAnswers results: ', results);
        updateQuestionsList(results);
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