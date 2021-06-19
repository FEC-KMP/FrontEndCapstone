/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');

const router = express.Router();

const { GITHUB_API_KEY } = require('../config.js');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

//get reviews
router.get('/reviews', (req, res) => {
  axios.get(`${BaseUrl}/reviews`, {
    params: {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.productId
    },
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: err inside getReviews: ', err);
      res.status(404).send(err);
    });
});

//get meta data for a review
router.get('/reviews/meta', (req, res) => {
  const url = `${BaseUrl}/reviews/meta`;
  axios.get(url, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
    params: {
      product_id: req.query.product_id
    }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: err getMetaData', err);
      res.status(404).send(err);
    });
});

//post a review
//need headers
router.post('/reviews', (req, res) => {
  console.log('S: postReview req.body: ', req.body);
  axios
    .post(`${BaseUrl}/reviews`, req.body, {
      headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' }})
    .then((response) => {
      res.status(201).send(resonse.data);
    })
    .catch((err) => {
      console.log('S: err postReview: ', err);
      res.status(404).send(err);
    });
});

router.put('/reviews/:review_id/helpful', (req, res) => {
  console.log('S: helpful button triggered');
  // const url = `${BaseUrl}/${req.params}/helpful`;
  // axios
  //   .put(url, {
  //     headers: { Authorization: GITHUB_API_KEY},
  //     params: {
  //       review_id: req.params
  //     }
  //   })
  //   .then((response) => {
  //     res.status(204).send(response.data);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });

});

router.put('/reviews/:review_id/report', (req, res) => {
  console.log('S: Report button triggered');
  // const url = `${BaseUrl}/${req.params}/report`;
  // axios
  //   .put(url, {
  //     headers: { Authorization: GITHUB_API_KEY},
  //     params: {
  //       review_id: req.params
  //     }
  //   })
  //   .then((response) => {
  //     res.status(204).send(response.data);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });

});

module.exports = router;