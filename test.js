const createTops = require('./database/seeder');
// const createBottoms = require('./database/seeder');

test('createTops outputs correct shape', () => {
  expect.objectContaining({
    rating: expect.any(Number),
    username: expect.any(String),
    activeSinceDate: expect.any(String),
    helpfulnessVotesThumbsUp: expect.any(Number),
    helpfulnessVotesThumbsDown: expect.any(Number),
    featured: expect.any(Boolean),
    location: expect.any(String),
    athleticType: expect.any(String),
    ageRange: expect.any(String),
    bodyType: expect.any(String),
    whatYouLike: expect.any(String),
    whatYouDidntLike: expect.any(String),
    sortableReviewDate: expect.any(Date),
    reviewDate: expect.any(String),
    reviewTitle: expect.any(String),
    reviewBody: expect.any(String),
    wasThisReviewHelpfulYes: expect.any(Number),
    wasThisReviewHelpfulNo: expect.any(Number)
  });
});