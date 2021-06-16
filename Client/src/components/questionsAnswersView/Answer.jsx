import React, { useContext, useState, useEffect } from 'react';

const Answer = ({ answer }) => {
  return (
    <div>
      <span>{answer.body}</span>
      <div className="helpfulAndReport">
        <div>
          <span>By {answer.answerer_name}, {answer.date.slice(0, 10)} |</span>
          <span> Helpful?</span>
          <button type="button" className="btn btn-link">
            <div>
              Yes({answer.helpfulness}) |
            </div>
          </button>
          <button type="button" className="btn btn-link">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Answer;