import React, { useState, useContext, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import { qAContext } from '../../context/QAContext.jsx';

const QAList = ({ question }) => {


  return (question && question.answers) ? (
    <div>
      <div>
        <div>
          <h3>Q: {question.question_body}</h3>
          <span> Helpful?</span>
          <button type="button" className="btn btn-link">
            <div>
              Yes({question.question_helpfulness}) |
            </div>
          </button>
          <button type="button" className="btn btn-link">Add Answer</button>
        </div>
        <h3>A:</h3>
        <AnswerList
          answerList={question.answers} />
      </div>
    </div>
  ) : null;
};

export default QAList;

{/* <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div id="summary">
        <p class="collapse" id="collapseSummary">

        </p>
        <a class="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
      </div>
      </div>
      </div> */}