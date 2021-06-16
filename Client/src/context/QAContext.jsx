import React, { createContext, useState } from 'react';
import axios from 'axios';

export const qAContext = createContext();

export const QAProvider = (props) => {
  const [questionList, setQuestionList] = useState();
  const [answerList, setAnswerList] = useState();
  const [renderListQ, setRenderListQ] = useState();
  const [renderListA, setRenderListA] = useState();
  const [answerIdList, setAnswerIdList] = useState();

  const getListOfQuestions = (productId, callback) => {
    //product_id, page, count => parameters
    const params = { product_id: productId, page: 1, count: 5 };
    // console.log('C: getListOfQuestions params: ', params);
    axios.get('/qa/questions/', { params })
      .then((results) => {
        console.log('getListOfQuestions get/qa/questions result: ', results);
        callback(null, results.data);
      })
      .catch((err) => {
        console.log('C: getListOfQuestions get/qa/questions err: ', err);
        callback(err, null);
      });
  };

  const getListOfAnswers = (questionId, callback, page = 1, count = 5) => {
    //product_id, page, count => parameters
    const params = { page, count };
    // console.log('C: getListOfQuestions params: ', params);
    axios.get(`/qa/questions/${questionId}/answers`, { params })
      .then((results) => {
        // console.log('getListOfQuestions get/qa/questions result: ', results);
        callback(null, results.data);
      })
      .catch((err) => {
        // console.log('C: getListOfQuestions get/qa/questions err: ', err);
        callback(err, null);
      });
  };

  const addQuestion = (data, callback) => {
    // var data = {
    //   body: body,
    //   name: name,
    //   email: email,
    //   product_id: productId
    // };
    axios.post('/qa/questions', data)
      .then((results) => {
        // console.log('C: addQuestion get/qa/questions success results: ', results);
        callback(null, results);

      })
      .catch((err) => {
        // console.log('C: addQuestion get/qa/questions err: ', err);
        callback(err, null);
      });
  };


  const addAnswer = (body, name, email, photos, questionId, callback) => {
    const data = { body, name, email, photos };
    axios.post(`/qa/questions/${questionId}/answers`, { data })
      .then((results) => {
        // console.log('C: addAnswer get/qa/questions/:questions_id/answers success results: ', results);
        callback(null, results); //FIXME: results? //FIXME: may want to add answer to answersList
      })
      .catch((err) => {
        // console.log('C: addAnswer get/qa/questions/:questions_id/answers err: ', err);
        callback(err, null);
      });
  };

  return (
    <qAContext.Provider value={{
      questionList, setQuestionList,
      answerList, setAnswerList,
      renderListQ, setRenderListQ,
      renderListA, setRenderListA,
      answerIdList, setAnswerIdList,
      getListOfQuestions,
      getListOfAnswers,
      addQuestion,
      addAnswer
    }}>
      {props.children}
    </qAContext.Provider>
  );
};