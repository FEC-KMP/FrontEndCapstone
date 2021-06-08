const express = require('express');
const axios = require('axios');

const router = express.Router();
const controller = require('./controllers');
const {GITHUB_API_KEY} = require('./config.js');

//Connect controller methods to their corresponding routes
//example:


// router.get('/api', (req, res) => {
//   console.log(GITHUB_API_KEY);
//   // console.log('req.headers.endpoint',req.headers.endpoint);
//   axios.get(req.headers.endpoint, {
//     headers: {Authorization: GITHUB_API_KEY},
//   })
//     .then((response) => {
//       // console.log('this is response inside get request',response);
//       res.send(response.data);
//     })
//     .catch((err) => {
//       console.log('err inside routes.js');

//     });
// });
// //  router.get('/reviews', ())
// module.exports = router;

