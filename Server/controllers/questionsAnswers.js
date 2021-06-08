const express = require('express');
const axios = require('axios');
const router = express.Router();

const { GITHUB_API_KEY } = require('../config');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions';

//List questions
router.get('/questions', (req, res) => {
  // console.log("got to get/questions serverside, req.body: ", req.query)
  axios.get(BaseUrl, {
    params: {
      productId: req.query.productId,
      page: req.query.page,
      count: req.query.count
    },
    headers: { Authorization: GITHUB_API_KEY }
  })
    .then((response) => {
      console.log('get/qa/questions response',response);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});
//Answers List params: {page: , count: }
router.get('/questions/:question_id/answers', (req, res) => {
  console.log(req.params.question_id);
  const id = req.params.question_id;
  const url = `${BaseUrl}/${id}/answers`;
  axios.get(url, { headers: { 'Authorization': GITHUB_API_KEY } })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});

//Add a question
router.post('/questions', (req, res) => {
  console.log(req.body);
  const params = {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    productId: req.body.productId
  };
  axios.post(BaseUrl, params, {
    headers: { Authorization: GITHUB_API_KEY },
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(500).send(err);
    });
});

//  router.get('/reviews',
module.exports = router;