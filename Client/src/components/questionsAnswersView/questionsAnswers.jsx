import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchQAForm from './SearchQAForm.jsx';
import QAList from './QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
import ProductIdContext from '../ProductIdContext.jsx';
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
    const searchResult = questionList.filter(question => (question.question_body.toLowerCase().includes(searchQuestion.toLowerCase())));
    if (searchQuestion.length >= 3) {
      setRenderListQ(searchResult.slice(0, 4));
    }
  };

  const moreQuestions = (renderListQ && questionList.length > 4) ? (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div id="summary">
            <div class="collapse" id="collapseSummary">
              {questionList.slice(0, 6).map(question => (
                <QAList
                  key={question.question_id}
                  question={question}
                />
              ))}
            </div>
            <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return !loading ? (

    <div className="questionsContainer">
      <h1>QUESTIONS AND ANSWERS</h1>
      <SearchQAForm handleSearch={handleSearch}/>
      <div>{renderListQ.map(question => (
        <QAList
          key={question.question_id}
          question={question}
        />
      ))}
      {questionList.length > 4 && (
        moreQuestion
      )}
      </div>


      <AskQuestionForm />
    </div>
  ) : (
      <h1>Loading...</h1>
    );
};
export default QuestionsAnswers;


{/* <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div id="summary">
        <p class="collapse" id="collapseSummary">

        </p>
        <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
      </div>
    </div>
  </div>
</div> */}