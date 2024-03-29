import React, { useState, useContext, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import { qAContext } from '../../context/QAContext.jsx';

const QAList = ({ question, productId }) => {
  const { questionList, setQuestionList, renderListQ, setRenderListQ, addAnswer, getListOfQuestions, MarkQuestionHelpful, reportQuestion } = useContext(qAContext);

  const [body, setAnswerBody] = useState('');
  const [name, setNickName] = useState('');
  const [email, setYourEmail] = useState('');
  const [photo, setPhoto] = useState([]);
  const [qHelpful, setQHelpful] = useState(question.question_helpfulness);
  const [helpfulQClicked, setHelpfulQClicked] = useState(false);
  const [qReport, setQReport] = useState(false);

  const handleSubmitAnswer = (e) => {
    const data = {
      body: body,
      name: name,
      email: email,
    };
    // eslint-disable-next-line camelcase
    const question_id = question.question_id;
    console.log('question_id', question.question_id);
    e.preventDefault();
    addAnswer(data, question_id, (error, results1) => {
      if (error) {
        console.log(error);
      } else {

        getListOfQuestions(productId, (err, results) => {
          if (err) {
            console.log(err);
          } else {
            const sortQuestions = results.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
            setQuestionList(sortQuestions);
          }
        });
        setAnswerBody('');
        setNickName('');
        setYourEmail('');
      }
    });
  };

  // useEffect(() => {
  //   setRenderListQ(questionList.slice(0, 4));
  // }, [questionList]); this effect more question

  const handleMarkQuestionHelpful = (e) => {
    e.preventDefault();
    MarkQuestionHelpful({}, question.question_id);
    setQHelpful(question.question_helpfulness++);
    setHelpfulQClicked(true);
  };

  const handleQuestionReport = (e) => {
    e.preventDefault();
    reportQuestion({}, question.question_id);
    setQReport(true);
  };

  return (question && question.answers) ? (
    <div>
      <div>
        <div>
          <div class="shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
              <div className="col justify-content-start">
                <h5 >Q: {question.question_body} </h5>

              </div>
              <div style={{textAlign: 'right'}}className="col justify-content-end">

                <span className="helpful"> Helpful?</span>
                <button type="button" className="yes" onClick={handleMarkQuestionHelpful}>
                  <div>
                    Yes({question.question_helpfulness}) |
                  </div>
                </button>
                {!qReport ?
                  <button type="button" className="report" onClick={handleQuestionReport}>
                    Report
                  </button> : 'Reported!'}
                <button type="button" className="addAnswer" data-toggle="modal" data-target={`#qID${question.question_id}`}>Add Answer</button>
              </div>

            </div>

          </div>

          {/* <button type="button" className="btn btn-link">Add Answer</button> */}

          <div className="modal fade left" id={`qID${question.question_id}`}>
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
                          onChange={(e) => { setNickName(e.target.value); }}
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
                          onChange={(e) => { setYourEmail(e.target.value); }}
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
                          onChange={(e) => { setAnswerBody(e.target.value); }}
                          maxLength="1000"></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="FormControlFile1">Upload Photo</label>
                      <input type="file"
                        className="form-control-file"
                        value={photo}
                        onChange={(e) => { setPhoto(); }}
                        id="FormControlFile1" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="human" className="col-sm-3 control-label">
                        <span className="required">*</span> Human or Bot:</label>
                      <div className="col-sm-4">
                        <h3 className="human">Six + 6 = ?</h3>
                        <input type="number" className="form-control" id="human" name="human" placeholder="Enter sum in digits" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-offset-3 col-sm-6 col-sm-offset-3">
                        <button type="button" id="submit" name="submit" className="btn-lg btn-primary" onClick={(e) => {
                          console.log('questionId inside handle submit', question.question_id);
                          handleSubmitAnswer(e);

                        }}>SUBMIT</button>
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
        <AnswerList
          answerList={question.answers} />
      </div>
    </div>
  ) : null;
};

export default QAList;

