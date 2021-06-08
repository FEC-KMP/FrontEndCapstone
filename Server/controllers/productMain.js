const path = require('path');
// const headers = require('./cors');
const axios = require('axios');

var models = require('../models');
const API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';

const GITHUB_API_KEY = require('../config.js');


module.exports = {
  get: (req, res) => {
    console.log(req.options.params);
    axios.get('/products', req.options.params, {
      headers: { Authorization: GITHUB_API_KEY }
    })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

};