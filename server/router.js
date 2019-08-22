const controller = require('./controller.js');
const express = require('express');

const router = express.Router();

router
  .route('/api')
  .get(controller.get);


module.exports = router;
