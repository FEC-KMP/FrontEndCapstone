import React, { useContext, useState, useEffect } from 'react';
import { qAContext } from '../../context/QAContext.jsx';
import Answer from './Answer.jsx';

const AnswerList = ({ answerList }) => {
  const sortAnswers = Object.values(answerList).sort((a, b) => (b.helpfulness - a.helpfulness));
  const [renderListA, setRenderListA] = useState();


  useEffect(()=> {
    setRenderListA(sortAnswers.slice(0, 2));
  }, []);

  let moreAnswerMessage;

  if (renderListA && sortAnswers) {
    // console.log(renderListA.length);
    if (renderListA.length < sortAnswers.length) {
      // console.log('see more answers')
      moreAnswerMessage = 'SEE MORE ANSWERS';
    } else if (renderListA.length === sortAnswers.length && sortAnswers.length > 2) {
      moreAnswerMessage = 'COLLAPSE ANSWERS';
    }
  }

  const handleMoreAnswersClick = () => {
    if (renderListA.length === 2) {
      setRenderListA(sortAnswers.slice(0, 4));
    } else if (renderListA.length === 4 && renderListA.length < sortAnswers.length) {
      setRenderListA(sortAnswers);
    } else if (renderListA.length === sortAnswers.length) {
      setRenderListA(sortAnswers.slice(0, 2));
    }
  };
  const moreAnswers = renderListA && sortAnswers.length > 2 ? (
    <button
      className="moreAnswersButton"
      type="submit"
      onClick={handleMoreAnswersClick}
    >
      {moreAnswerMessage}
    </button>
  ) : null;

  return renderListA ? (
    <div>
      {renderListA.map(answer => (
        <Answer key={answer.id}
          answer={answer} />
      )
      )}
      {
        moreAnswers
      }

    </div>
  ) : null;

};

export default AnswerList;