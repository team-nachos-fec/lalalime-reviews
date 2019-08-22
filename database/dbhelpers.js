const Review = require('./index.js');

const getAllReviews = () => {
  return Review.find();
}

module.exports = getAllReviews;