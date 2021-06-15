import React, { useContext, useState, useEffect } from 'react';
import { qAContext } from '../../context/QAContext.jsx';
import Answer from './Answer.jsx';

const AnswerList = ({ answerList }) => {
  const sortAnswers = Object.values(answerList).sort((a, b) => (b.helpfulness - a.helpfulness));

  const moreAnswers = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div id="summary">
            <div className="collapse" id="collapseSummary">

              {sortAnswers.map(answer => (
                <Answer key={answer.id}
                  answer={answer} />
              )
              )}
            </div>
            <a className="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
          </div>
        </div>
      </div>
    </div>
  )

  return sortAnswers ? (
    <div>
      {sortAnswers.slice(0, 2).map(answer => (
        <Answer key={answer.id}
          answer={answer} />
      )
      )}
      {sortAnswers.length > 2 && (
        moreAnswers
      )}

    </div>
  ) : null;

};

export default AnswerList;