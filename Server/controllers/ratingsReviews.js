/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');

const router = express.Router();

const { GITHUB_API_KEY } = require('../config.js');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews';

//get reviews
router.get('/reviews', (req, res) => {
  axios.get(`${BaseUrl}`, {
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

//get meta data for a review
router.get('/reviews/meta', (req, res) => {
  console.log(req.params);
  const id = req.params.question_id;
  const url = `${BaseUrl}/meta/${id}`;
  axios.get(url, { headers: { Authorization: GITHUB_API_KEY } }, id)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('err inside routes.js');
      res.status(404).send(err);
    });
});

//post a review
router.post('/reviews', (req, res) => {
  const params = [req.body.product_id, req.body.rating, req.body.summary, req.body.body, req.body.recommend, req.body.name, req.body.email, req.body.photos, req.body.characteristics];
  axios
    .post(BaseUrl, { headers: { Authorization: GITHUB_API_KEY }}, params)
    .then((response) => {
      res.status(200).send(resonse.data);
    })
    .catch((err) => {
      console.log('err posting in routes', err);
      res.status(404).send(err);
    });
});


module.exports = router;