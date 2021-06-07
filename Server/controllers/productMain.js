const path = require('path');
// const headers = require('./cors');
const axios = require('axios');

var models = require('../models');
const API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const GITHUB_API_KEY = require('../config.js');


.get(req, res => {
  var productId = req.body.productId;
  //format link
  //get request to api
  //return results in res.send()
})


// const getListOfProducts = (req, res) => {
//   console.log(req.headers.endPoint);
//   axios.get('/products', req.headers.endpoint, {
//     headers: { Authorization: GITHUB_API_KEY }
//   })
//     .then((response) => {
//       res.status(200).send(response.data)
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// };


module.exports = {
  // getListOfProducts

};