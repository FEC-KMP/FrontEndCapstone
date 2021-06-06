const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const PORT = 8080;

var app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', function (req, res) {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});