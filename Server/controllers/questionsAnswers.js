const express = require('express');
const axios = require('axios');
const router = express.Router();
const app = express();
app.use(express.json());

const {GITHUB_API_KEY} = require('../config');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions';


//List questions
router.get('/questions', (req, res) => {
  // console.log("got to get/questions serverside, req.body: ", req.query)
  axios.get(BaseUrl, {
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count
    },
    headers: { Authorization: GITHUB_API_KEY }
  })
    .then((response) => {
      console.log('S: get/qa/questions response', response.data.results);
      res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.log('S: get/qa/questions err: ', err);
      res.status(404).send(err);
    });
});
//Answers List params: {page: , count: }
router.get('/questions/:questionId/answers', (req, res) => {
  // console.log('S: get/questions/:question_id/answers  req.data: ', req.params);
  const id = req.params.questionId;
  const url = `${BaseUrl}/${id}/answers`;
  const params = {
    page: req.query.page,
    count: req.query.count
  };

  axios.get(url, { params: params, headers: { 'Authorization': GITHUB_API_KEY } })
    .then((response) => {
      // console.log('S: get/questions/:question_id/answers response.data.results: ', response.data.results);
      res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.log('S: get/questions/:question_id/answers err: ', err);
      res.status(404).send(err);
    });
});

//Add a question
router.post('/questions', (req, res) => {
  console.log('S: post/questions req.body.data: ', req.body);
  //FIXME: passing in req.body.data as postData params, may need to change
  // const params = {
  //   body: "can I Iron it",
  //   name: "cool",
  //   email: "xyz@gmail.com",
  //   product_id: 18078
  // }
  axios.post(BaseUrl, req.body, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('S: post/questions/ response.data: ', response.data);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('S: post/questions err: ', err);
      res.status(500).send(err);
    });
});

//Add an Answer
router.post('/questions/:questionId/answers', (req, res) => {
  console.log('S: post/questions/:questionId/answers req.body.data: ', req.body.data);
  //FIXME: passing in req.body.data as postData params, may need to change
  axios.post(`${BaseUrl}/${req.params.questionId}/answers`, req.body.data, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      console.log('S: post/questions/:question_id/answers response: ', response);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('S: post/questions/:questionId/answers err: ', err);
      res.status(500).send(err);
    });
});


//  router.get('/reviews',
module.exports = router;

