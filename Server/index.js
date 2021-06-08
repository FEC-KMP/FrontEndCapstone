const express = require('express');
const path = require('path');
// const cors = require('cors');
const axios = require('axios');
const PORT = 8080;
// const router = require('./routes.js');
const questions = require('./controllers/questionsAnswers.js');
const products = require('./controllers/productMain');
var app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());

app.use('/qa', questions);
app.use('/products', products);


app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});