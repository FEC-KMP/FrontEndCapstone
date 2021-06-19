import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchQAForm from './SearchQAForm.jsx';
import QAList from './QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
import ProductIdContext from '../../context/ProductIdContext.jsx';
import { qAContext } from '../../context/QAContext.jsx';



const QuestionsAnswers = () => {
  const { productId, updateProductId } = useContext(ProductIdContext);
  const { getListOfQuestions, questionList, setQuestionList, renderListQ, setRenderListQ
  } = useContext(qAContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListOfQuestions(productId, (err, results) => {
      if (err) {
        console.log('C: QuestionsAnswers useEffect getListOfQuestions err: ', err);
      } else {
        console.log('C: QuestionsAnswers useEffect getListOfQuestions results: ', results);
        const sortQuestions = results.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
        console.log('sortQuestions', sortQuestions);
        setQuestionList(sortQuestions);
      }
    });

  }, [productId]);

  useEffect(() => {
    if (questionList) {
      setRenderListQ(questionList.slice(0, 4));
      setLoading(false);
    }
  }, [questionList]);

  const handleSearch = (searchQuestion) => {
    console.log('search term', searchQuestion);
    const searchResult = questionList.filter(question => (question.question_body.toLowerCase().includes(searchQuestion.toLowerCase())));

    if (searchQuestion.length >= 3) {
      setRenderListQ(searchResult.slice(0, 4));
      console.log('slice of search result', searchResult.slice(0, 4));
    } else {
      setRenderListQ(questionList.slice(0, 4));
    }
  };

  const handleMoreQuestionsClick = () => {
    console.log('questionListLength', questionList.length);
    if (renderListQ.length === 4) {
      setRenderListQ(questionList.slice(0, 6));
    } else if (renderListQ.length === 6 && renderListQ.length < questionList.length) {
      setRenderListQ(questionList.slice(0, questionList.length));
    } else if (renderListQ.length === questionList.length) {
      setRenderListQ(questionList.slice(0, 4));
    }
  };

  let moreQAMessage;

  if (questionList && renderListQ) {
    if (renderListQ && (renderListQ.length < questionList.length)) {
      moreQAMessage = 'SEE MORE QUESTIONS';
    } else if (renderListQ.length === questionList.length && questionList.length > 4) {
      moreQAMessage = 'COLLAPSE QUESTIONS';
    }
  }

  const seeMoreQuestions = renderListQ && questionList.length > 4 ? (
    <button
      className="moreQuestion"
      type="button"
      onClick={handleMoreQuestionsClick}
    >
      {moreQAMessage}
    </button>
  ) : null;


  return !loading ? (

    <div className="questionsContainer">
      <h1>QUESTIONS AND ANSWERS</h1>
      <SearchQAForm handleSearch={handleSearch} />
      <div>{renderListQ.map(question => (
        <QAList
          key={question.question_id}
          question={question}
          productId={productId}
        />
      ))}
      {seeMoreQuestions}
      </div>
      <AskQuestionForm productId={productId} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
export default QuestionsAnswers;


