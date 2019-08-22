const controller = require('./controller.js');
const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(controller.get);

router
  .route('/filter-by-rating/:rating')
  .get(controller.filterByRating);

router
  .route('/filter-by-athletic-type/:athleticType')
  .get(controller.filterByAthleticType);

router
  .route('/filter-by-age-range/:ageRange')
  .get(controller.filterByAgeRange);

router
  .route('/filter-by-body-type/:bodyType')
  .get(controller.filterByBodyType);


module.exports = router;
