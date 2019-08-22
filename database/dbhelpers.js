const Review = require('./index.js');

const getAllReviews = () => {
  return Review.find();
};

// filter by rating
const getReviewsByRating = (rating) => {
  return Review.find({ rating: { $eq: rating.rating } });
};

// filter by athleticType
const getReviewsByAthleticType = (athleticType) => {
  return Review.find({ athleticType: athleticType.athleticType.toUpperCase() });
}

// filter by ageRange
const getReviewsByAgeRange = (ageRange) => {
  return Review.find({ ageRange: ageRange.ageRange.toUpperCase() });
} 

// filter by bodyType
const getReviewsByBodyType = (bodyType) => {
  return Review.find({ bodyType: bodyType.bodyType.toUpperCase() });
} 

// sort by featured true first
const sortReviewsByFeatured = (featured) => {
  return Review.find({}).sort({ featured: -1 });
}

// sort by date newest first
const sortReviewsByDate = (reviewDate) => {
  return Review.find({}).sort({ sortableReviewDate: -1 });
}

// sort by rating descending


// sort by rating ascending

module.exports = { 
  getAllReviews, 
  getReviewsByRating, 
  getReviewsByAthleticType,
  getReviewsByAgeRange,
  getReviewsByBodyType,
  sortReviewsByFeatured,
  sortReviewsByDate
};