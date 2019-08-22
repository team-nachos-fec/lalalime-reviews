const getAllReviews = require('../database/dbhelpers.js');

const controller = {
  get: (req, res) => {
    getAllReviews()
      .then(reviews => res.send(200).status(reviews))
      .catch(err => console.error(err));
  }
};

module.exports = controller;