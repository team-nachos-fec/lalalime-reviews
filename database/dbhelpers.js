const Review = require('./index.js');

const getAllReviews = () => {
  return Review.find();
};

// filter by rating
const getReviewsByRating = (rating) => {
  console.log(rating);
  return Review.find({ rating: { $eq: rating.rating } });
};

// filter by athleticType

// filter by ageRange

// filter by bodyType

// sort by featured true first

// sort by date newest first

// sort by rating descending

// sort by rating ascending

module.exports = { getAllReviews, getReviewsByRating };