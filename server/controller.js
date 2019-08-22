const getAllReviews = require('../database/dbhelpers.js');

const controller = {
  get: (req, res) => {
    getAllReviews()
      .then(reviews => res.status(200).send(reviews))
      .catch(err => res.status(400).send(err));
  }
};

module.exports = controller;