const express = require('express');
const axios = require('axios');

const router = express.Router();

const { GITHUB_API_KEY } = require('../config.js');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions';


router.get('/questions', (req, res) => {
  axios.get(BaseUrl, {
    headers: { Authorization: GITHUB_API_KEY },
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count
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

router.get('/questions/:question_id/answers', (req, res) => {
console.log(req.params)
  axios.get(BaseUrl, { headers: { Authorization: GITHUB_API_KEY }}, req.params.question_id )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});
//  router.get('/reviews', ())
module.exports = router;