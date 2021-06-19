import React, { useContext, useState, useEffect } from 'react';
import { qAContext } from '../../context/QAContext.jsx';
import DateFormat from '../DateFormat.jsx'
const Answer = ({ answer }) => {
  const { questionList, setQuestionList, renderListQ, setRenderListQ, addAnswer, getListOfQuestions, MarkAnswerHelpful, reportAnswer } = useContext(qAContext);

  const [aHelpful, setAHelpful] = useState(answer.helpfulness);
  const [helpfulAClicked, setHelpfulAClicked] = useState(false);
  const [aReport, setAReport] = useState(false);

  const handleMarkAnswerHelpful = (e) => {
    e.preventDefault();
    MarkAnswerHelpful({}, answer.id);
    setAHelpful(answer.helpfulness++);
    setHelpfulAClicked(true);
  };

  const handleAnswerReport = (e) => {
    e.preventDefault();
    reportAnswer({}, answer.id);
    setAReport(true);
  };

  return (
    <div>
      <span>{answer.body}</span>
      <div className="helpfulAndReport">
        <div>
          <span>By {answer.answerer_name}, {DateFormat(answer.date)} |</span>
          <span className="helpful"> Helpful?</span>
          <button type="button" className="helpful" onClick={handleMarkAnswerHelpful}>
            <div>
              Yes({answer.helpfulness}) |
            </div>
          </button>
          {!aReport ?
            <button type="button" className="report" onClick={handleAnswerReport}>
              Report
            </button> : 'Reported!'}
        </div>
      </div>
    </div>
  );
};

export default Answer;