import React, { useState, useEffect, useContext } from 'react';
import { qAContext } from '../../context/QAContext.jsx';
const AskQuestionForm = ({ productId }) => {
  const { questionList, setQuestionList, renderListQ, setRenderListQ, addQuestion, getListOfQuestions } = useContext(qAContext);
  const [body, setQuestionBody] = useState('');
  const [name, setNickName] = useState('');
  const [email, setYourEmail] = useState('');




  const handleSubmit = (e) => {
    const data = {
      body: body,
      name: name,
      email: email,
      product_id: Number(productId)
    };
    e.preventDefault();
    addQuestion(data, (error, results1) => {
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
      }
    });

  };

  useEffect(() => {
    setRenderListQ(questionList.slice(0, 4));
  }, [questionList]);

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#QModal">ADD A QUESTION +</button>
      <div className="modal fade left" id="QModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="pull-left no-margin">Ask Your Question About the Camo OneSei</h3>
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
                  <label htmlFor="question" className="col-sm-3 control-label">
                    <span className="required">*</span>Question:</label>
                  <div className="col-sm-9">
                    <textarea name="question" rows="4" required className="form-control" id="question"
                      placeholder="Type your question here"
                      value={body}
                      onChange={(e) => { setQuestionBody(e.target.value) }}
                      maxLength="1000"></textarea>
                  </div>
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
                    <button type="button" id="submit" name="submit" className="btn-lg btn-primary" onClick={handleSubmit}>SUBMIT</button>
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
  );
};

export default AskQuestionForm;
