const { 
  getAllReviews, 
  getReviewsByRating, 
  getReviewsByAthleticType,
  getReviewsByAgeRange,
  getReviewsByBodyType
} = require('../database/dbhelpers.js');

const controller = {
  get: (req, res) => {
    getAllReviews()
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  },

  filterByRating: (req, res) => {
    let { rating } = req.params;
    getReviewsByRating({ rating })
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  }, 

  filterByAthleticType: (req, res) => {
    let { athleticType } = req.params;
    getReviewsByAthleticType({ athleticType })
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  },

  filterByAgeRange: (req, res) => {
    let { ageRange } = req.params;
    getReviewsByAgeRange({ ageRange })
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  },

  filterByBodyType: (req, res) => {
    let { bodyType } = req.params;
    getReviewsByBodyType({ bodyType })
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  }

};

module.exports = controller;