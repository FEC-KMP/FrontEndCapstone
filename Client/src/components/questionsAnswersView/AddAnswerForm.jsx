// import React, { useState, useContext, useEffect } from 'react';
// import AnswerList from './AnswerList.jsx';
// import { qAContext } from '../../context/QAContext.jsx';

// const AddAnswerForm = ({ question, productId }) => {
//   const { questionList, setQuestionList, renderListQ, setRenderListQ, addAnswer, getListOfQuestions, MarkQuestionHelpful, reportQuestion } = useContext(qAContext);

//   const [body, setAnswerBody] = useState('');
//   const [name, setNickName] = useState('');
//   const [email, setYourEmail] = useState('');
//   const [photo, setPhoto] = useState([]);


//   const handleSubmitAnswer = (e) => {
//     const data = {
//       body: body,
//       name: name,
//       email: email,
//     };
//     const question_id = question.question_id;

//     e.preventDefault();
//     addAnswer(data, question_id, (error, results1) => {
//       if (error) {
//         console.log(error);
//       } else {

//         getListOfQuestions(productId, (err, results) => {
//           if (err) {
//             console.log(err);
//           } else {
//             const sortQuestions = results.sort((a, b) => (b.question_helpfulness - a.question_helpfulness));
//             setQuestionList(sortQuestions);
//           }
//         });
//       }
//     });
//   };

//   // useEffect(() => {
//   //   setRenderListQ(questionList.slice(0, 4));
//   // }, [questionList]);

// };

//   export default AddAnswerForm;