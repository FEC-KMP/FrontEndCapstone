import React, { useState, useContext, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import { qAContext } from '../../context/QAContext.jsx';

const QAList = ({ question }) => {

  const [body, setAnswerBody] = useState();
  const [name, setNickName] = useState();
  const [email, setYourEmail] = useState();
  const handleSubmit = () => {

  }
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
          {/* <button type="button" className="btn btn-link">Add Answer</button> */}

          <button type="button" className="btn btn-link" data-toggle="modal" data-target="#myModal">Add answer</button>
          <div className="modal fade left" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="pull-left no-margin">Submit Your Answer</h3>
                  <button type="button" className="close" data-dismiss="modal" title="Close"><span className="glyphicon glyphicon-remove"></span>
                  </button>
                </div>
                <div className="modal-body">

                  <form className="form-horizontal" role="form" method="post" >
                    <span className="required">* Required</span>

                    <div className="form-group">
                      <label htmlFor="name" className="col-sm-3 control-label">
                        <span className="required">*</span>nickname:</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"
                          name="name"
                          placeholder="Example: jackson11!"
                          value={name}
                          onChange={(e) => { setNickName(e.target.value) }}
                          required />
                        <p>For privacy reasons, do not use your full name or email address</p>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="col-sm-3 control-label">
                        <span className="required">*</span>email:</label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Example: jack@email.com"
                          value={email}
                          onChange={(e) => { setYourEmail(e.target.value) }}
                          required />
                        <p>For authentication reasons, you will not be emailed</p>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="answer" className="col-sm-3 control-label">
                        <span className="required">*</span>Answer:</label>
                      <div className="col-sm-9">
                        <textarea name="answer" rows="4" required className="form-control" id="answer"
                          placeholder="Type your answer here"
                          value={body}
                          onChange={(e) => { setAnswerBody(e.target.value) }}
                          maxLength="1000"></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                        <button type="submit" id="submit" name="submit" className="btn-lg btn-primary" onSubmit={handleSubmit}>SUBMIT</button>
                      </div>
                    </div>

                  </form>
                </div>

                <div className="modal-footer">
                  <button className="btn-sm close" type="button" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

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