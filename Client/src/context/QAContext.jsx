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
    const params = { product_id: productId, page: 1, count: 20 };
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
    console.log('data', data);
    axios.post('/qa/questions', data)
      .then((results) => {
        callback(null, results);
      })
      .catch((err) => {
        callback(err, null);
      });
  };


  const addAnswer = (data, question_id, callback) => {
    axios.post(`/qa/questions/${question_id}/answers`, data)
      .then((results) => {
        callback(null, results);
      })
      .catch((err) => {
        callback(err, null);
      });
  };

  const MarkQuestionHelpful = (data, question_id) => {
    axios.put(`/qa/questions/${question_id}/helpful`, data)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log('error mark helpful question', err);
      });
  };
  const reportQuestion = (data, question_id) => {
    axios.put(`/qa/questions/${question_id}/report`, data)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log('error report question', err);
      });
  };

  const MarkAnswerHelpful = (data, answer_id) => {
    axios.put(`/qa/answers/${answer_id}/helpful`, data)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log('error mark helpful answer', err);
      });
  };
  const reportAnswer = (data, answer_id) => {
    axios.put(`/qa/answers/${answer_id}/report`, data)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log('error report answer', err);
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
      addAnswer,
      MarkQuestionHelpful,
      MarkAnswerHelpful,
      reportAnswer,
      reportQuestion
    }}>
      {props.children}
    </qAContext.Provider>
  );
};