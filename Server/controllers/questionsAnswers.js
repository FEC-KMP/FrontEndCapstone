const express = require('express');
const axios = require('axios');
const router = express.Router();
const app = express();
app.use(express.json());

const GITHUB_API_KEY = require('../config.js');
const BaseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions';
const AUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers';


//List questions
router.get('/questions', (req, res) => {
  // console.log("got to get/questions serverside, req.body: ", response.body)
  axios.get(BaseUrl, {
    params: {
      'product_id': req.query.product_id,
      page: req.query.page,
      count: req.query.count
    },
    headers: { Authorization: GITHUB_API_KEY }
  })
    .then((response) => {
      // console.log('S: get/qa/questions response', response.body.results);
      res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.log('S: get/qa/questions err: ', err);
      res.status(404).send(err);
    });
});
//Answers List params: {page: , count: }
router.get('/questions/:questionId/answers', (req, res) => {
  // console.log('S: get/questions/:question_id/answers  req.data: ', req.params);
  const id = req.params.questionId;
  const url = `${BaseUrl}/${id}/answers`;
  const params = {
    page: req.query.page,
    count: req.query.count
  };

  axios.get(url, { params: params, headers: { 'Authorization': GITHUB_API_KEY } })
    .then((response) => {
      // console.log('S: get/questions/:question_id/answers response.data.results: ', response.data.results);
      res.status(200).send(response.data.results);
    })
    .catch((err) => {
      console.log('S: get/questions/:question_id/answers err: ', err);
      res.status(404).send(err);
    });
});

//Add a question
router.post('/questions', (req, res) => {
  console.log('S: post/questions req.body.data: ', req.body);

  axios.post(BaseUrl, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },

  })
    .then((response) => {
      console.log('S: post/questions/ response.data: ', response.data);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('S: post/questions err: ', err);
      res.status(500).send(err);
    });
});

//Add an Answer
router.post('/questions/:question_id/answers', (req, res) => {
  console.log('S: post/questions/:questionId/answers req.body.data: ', req.body);
  //FIXME: passing in req.body.data as postData params, may need to change
  axios.post(`${BaseUrl}/${req.params.question_id}/answers`, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('S: post/questions/:question_id/answers response: ', response);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('S: post/questions/:questionId/answers err: ', err);
      res.status(500).send(err);
    });
});
//  mark question as helpful
router.put('/questions/:question_id/helpful', (req, res) => {
  axios.put(`${BaseUrl}/${req.params.question_id}/helpful`, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('S: put/questions/:question_id/helpful response: ', response);
      res.status(204).send(response.data);
    })
    .catch((err) => {
      console.log('S: put/questions/:questionId/helpful err: ', err);
      res.status(400).send(err);
    });
});
// report question
router.put('/questions/:question_id/report', (req, res) => {
  axios.put(`${BaseUrl}/${req.params.question_id}/report`, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('S: put/questions/:question_id/report response: ', response);
      res.status(204).send(response.data);
    })
    .catch((err) => {
      console.log('S: put/questions/:questionId/report err: ', err);
      res.status(400).send(err);
    });
});

//mark answer as helpful

router.put('/answers/:answer_id/helpful', (req, res) => {
  axios.put(`${AUrl}/${req.params.answer_id}/helpful`, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('S: put/answers/:answer_id/helpful response: ', response);
      res.status(204).send(response.data);
    })
    .catch((err) => {
      console.log('S: put/answers/:answer_id/helpful err: ', err);
      res.status(400).send(err);
    });
});

// report answer
router.put('/answers/:answer_id/report', (req, res) => {
  axios.put(`${AUrl}/${req.params.answer_id}/report`, req.body, {
    headers: { Authorization: GITHUB_API_KEY, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log('S: put/answers/:answer_id/report response: ', response);
      res.status(204).send(response.data);
    })
    .catch((err) => {
      console.log('S: put/answers/:answer_id/report err: ', err);
      res.status(400).send(err);
    });
});
//  router.get('/reviews',
module.exports = router;

