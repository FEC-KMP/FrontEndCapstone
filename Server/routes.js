const express = require('express');

const router = express.Router();
const controller = require('./controllers');

//Connect controller methods to their corresponding routes
//example:
// router.get('/messages', controller.messages.get);
router.get('/products', controller.productMain.getListOfProducts);

module.exports = router;

