const path = require('path');
// const headers = require('./cors');
const express = require('express');
const axios = require('axios');

const router = express.Router();


const BaseUrl = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const GITHUB_API_KEY = require('../config.js');

// router.get('/products', (req, res) => {
//   axios.get(BaseUrl, {
//     headers: { Authorization: GITHUB_API_KEY },
//     params: {
//       product_id: req.query.product_id,
//       page: req.query.page,
//       count: req.query.count
//     }
//   })
//     .then((response) => {
//       // console.log('this is response inside get request',response);
//       res.status(200).send(response.data);
//     })
//     .catch((err) => {
//       console.log('productMain get err: ', err);
//       res.status(404).send(err);
//     });

router.get('/:productId', (req, res) => {
  // console.log('get//products/:product_id');
  axios.get(`${BaseUrl}/products/${req.params.productId}`, {
    headers: { 'Authorization': GITHUB_API_KEY },
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      // console.log('productMain get response.data: ', response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: productMain get/:productId err: ', err);
      res.status(500).send(err);
    });
});

router.get('/:productId/styles', (req, res) => {
  // console.log('/products/:product_id/styles');
  axios.get(`${BaseUrl}/products/${req.params.productId}/styles`, {
    headers: { 'Authorization': GITHUB_API_KEY },
  })
    .then((response) => {
      // console.log('this is response inside get request',response);
      // console.log('productMain get styles response.data: ', response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('S: productMain get/:productId/styles err: ', err);
      res.status(500).send(err);
    });
});

module.exports = router;