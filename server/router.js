const controller = require('./controller.js');
const express = require('express');

const router = express.Router();

router
  .route('/')
    .get(controller.get);

router
  .route('/:rating')
    .get(controller.filterByRating);


module.exports = router;
