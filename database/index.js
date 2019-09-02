const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lalalime', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
});

let reviewSchema = new mongoose.Schema({
  rating: Number,
  username: String,
  activeSinceDate: String,
  helpfulnessVotesThumbsUp: Number,
  helpfulnessVotesThumbsDown: Number,
  featured: Boolean,
  location: String,
  athleticType: String,
  ageRange: String, 
  bodyType: String, 
  whatYouLike: String,
  whatYouDidntLike: String,
  reviewDate: String,
  sortableReviewDate: Date,
  reviewTitle: String,
  reviewBody: String,
  wasThisReviewHelpfulYes: Number,
  wasThisReviewHelpfulNo: Number
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;