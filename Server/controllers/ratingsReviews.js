/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');

const router = express.Router();

const { GITHUB_API_KEY } = require('../config.js');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews';


router.get('/reviews', (req, res) => {
  axios.get(BaseUrl, {
    headers: { Authorization: GITHUB_API_KEY },
    params: {
      // eslint-disable-next-line camelcase
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id
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

router.get('/reviews/meta/:product_id', (req, res) => {
  console.log(req.params);
  const id = req.params.question_id;
  const url = `${BaseUrl}/${id}/answers`;
  axios.get(BaseUrl, { headers: { Authorization: GITHUB_API_KEY } }, req.params.product_id)
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