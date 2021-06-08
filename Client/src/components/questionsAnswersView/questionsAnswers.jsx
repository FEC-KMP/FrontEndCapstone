import React, { useState } from 'react';
import SearchQAForm from './SearchQAForm.jsx';
import QAList from './QAList.jsx';
import AskQuestionForm from './AskQuestionForm.jsx';
const QuestionsAnswers = () => {
  return (
    <div>
      <SearchQAForm />
      <QAList />
      <AskQuestionForm />
    </div>
  );
};
export default QuestionsAnswers;