const express = require('express');
const axios = require('axios');
const router = express.Router();

const {GITHUB_API_KEY} = require('../config');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions';

//List questions
router.get('/questions', (req, res) => {
  //template literal with baseURL and productId, page, and count
  axios.get(BaseUrl, {
    headers: { Authorization: GITHUB_API_KEY },
    // params: {
    //   product_id: req.query.product_id,
    //   page: req.query.page,
    //   count: req.query.count
    // }
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});
//Answers List
router.get('/questions/:question_id/answers', (req, res) => {
  console.log(req.params.question_id);
  const id = req.params.question_id;
  const url = `${BaseUrl}/${id}/answers`;
  axios.get(url, { headers: { Authorization: GITHUB_API_KEY }, params: {page: , count: } })
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
  axios.post(BaseUrl, {
    headers: { Authorization: GITHUB_API_KEY },
    params: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id
    }
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});

//  router.get('/reviews',
module.exports = router;