let Review = require('./index.js');

const ratings = [1, 2, 3, 4, 5];

const range = (start, end) => {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
}

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const usernameWords = ['LULU', 'PEANUT', 'LULUFAN', 'PEANUT', 'YOGAFAN', 'MARY', 'KATIE', 'BLESSED', 'YOGAGIRL', 'YOGI', 'PANTS', 'LOVEYOGA', 'YOGAGAL', 'EMILY', 'VIVIAN', 'JI'];

const usernameNumbers = range(1000, 9999);

const days = range(1, 31);

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const years = range(2014, 2019);

const helpfulnessVotesThumbs = range(0, 100);

const featured = [true, false];

const locations = ['BOULDER, CO', 'MILWAUKEE, WI', 'LOS ANGLES, CA', 'NEW YORK, NY', 'PORTLAND, OR', 'SAN FRANCISCO, CA', 'DENVER, CO', 'MADISON, WI', 'AUSTIN, TX', 'COLUMBUS, OH', 'CHICAGO, IL', 'ONTARIO, CANADA', 'SAN JOSE, CA', 'QUEBEC, CANADA', 'BRITISH COLUMBIA, CANADA', 'WASHINGTON, DC', 'AUKLAND, NEW ZEALAND', 'FARGO, ND', 'HOUSTON, TX', 'PHILADELPHIA, PA', 'SYNDEY, AUSTRALIA', 'NEW ORLEANS, LA', 'INDIANAPOLIS, IN', 'SEATTLE, WA', 'BOISE, ID', 'PHOENIX, AZ', 'BOSTON, MA', 'BALTIMORE, MD', 'MIAMI, FL', 'ATLANTA, GA', 'CHARLESTON, SC', 'NASHVILLE, TN', 'LOUISVILLE, KY', 'CINCINATTI, OH', 'OMAHA, NE'];

const athleticTypes = ['YOGI', 'RUNNER', 'DANCER', 'CYCLIST', 'SWEATY GENERALIST'];

const ageRanges = ['UNDER 18', '18-24', '25-34', '35-44', '45-54', '55-65', 'OVER 65', 'I KEEP MY AGE ON THE D.L.'];

const bodyTypes = ['ATHLETIC', 'CURVY', 'LEAN', 'MUSCULAR', 'PETITE', 'SLIM', 'SOLID'];

const reviewDate = randomDate(new Date(2014, 0, 1), new Date());

const wasThisReviewHelpful = range(0, 20);

const negativeAdjectives = ['tight', 'loose', 'itchy', 'small', 'tiny', 'huge', 'big', 'wide', 'narrow', 'smelly', 'pleasant', 'long', 'short', 'worst', 'too thick', 'too thin', 'too heavy', 'too light', 'ugly', 'gross'];

const positiveAdjectives = ['good', 'great', 'perfect', 'amazing', 'beautiful', 'gorgeous', 'wonderful', 'best'];

const bottomsNouns = ['ankles', 'hips', 'knees', 'legs'];

const topsNouns = ['shoulders', 'sleeves', 'torso', 'chest'];

const negativeVerbs = ['hate', 'do not like', 'dislike'];

const positiveVerbs = ['love', 'like', 'enjoy'];

const createBottoms = () => {
  const bottomReview = {};

  bottomReview.rating = ratings[Math.floor(Math.random() * Math.floor(5))];

  bottomReview.username = `${usernameWords[Math.floor(Math.random() * Math.floor(usernameWords.length))]}${usernameNumbers[Math.floor(Math.random() * Math.floor(usernameNumbers.length))]}`;

  bottomReview.activeSinceDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  bottomReview.helpfulnessVotesThumbsUp = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  bottomReview.helpfulnessVotesThumbsDown = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  bottomReview.featured = featured[Math.floor(Math.random() * Math.floor(featured.length))];

  bottomReview.location = `${locations[Math.floor(Math.random() * Math.floor(locations.length))]}`;

  bottomReview.athleticType = `${athleticTypes[Math.floor(Math.random() * Math.floor(athleticTypes.length))]}`;

  bottomReview.ageRange = `${ageRanges[Math.floor(Math.random() * Math.floor(ageRanges.length))]}`;

  bottomReview.bodyType = `${bodyTypes[Math.floor(Math.random() * Math.floor(bodyTypes.length))]}`;

  bottomReview.whatYouLike = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;

  bottomReview.whatYouDidntLike = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;

  bottomReview.reviewDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  if (bottomReview.rating < 3) {
    bottomReview.reviewTitle = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;
  } else {
    bottomReview.reviewTitle = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}`;
  }

  if (bottomReview.rating < 3) {
    bottomReview.reviewBody = `I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} how ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} they are in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}. I feel they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} and ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} them, especially because they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}.`
  } else {
    bottomReview.reviewBody = `I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} how ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} they are in the ${bottomsNouns[Math.floor(Math.random() * Math.floor(bottomsNouns.length))]}. I feel they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} and ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} them, especially because they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}.`
  }

  bottomReview.wasThisReviewHelpfulYes = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  bottomReview.wasThisReviewHelpfulNo = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  return bottomReview
};

const createTops = () => {
  const topReview = {};

  topReview.rating = ratings[Math.floor(Math.random() * Math.floor(5))];

  topReview.username = `${usernameWords[Math.floor(Math.random() * Math.floor(usernameWords.length))]}${usernameNumbers[Math.floor(Math.random() * Math.floor(usernameNumbers.length))]}`;

  topReview.activeSinceDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  topReview.helpfulnessVotesThumbsUp = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  topReview.helpfulnessVotesThumbsDown = helpfulnessVotesThumbs[Math.floor(Math.random() * Math.floor(helpfulnessVotesThumbs.length))];

  topReview.featured = featured[Math.floor(Math.random() * Math.floor(featured.length))];

  topReview.location = `${locations[Math.floor(Math.random() * Math.floor(locations.length))]}`;

  topReview.athleticType = `${athleticTypes[Math.floor(Math.random() * Math.floor(athleticTypes.length))]}`;

  topReview.ageRange = `${ageRanges[Math.floor(Math.random() * Math.floor(ageRanges.length))]}`;

  topReview.bodyType = `${bodyTypes[Math.floor(Math.random() * Math.floor(bodyTypes.length))]}`;

  topReview.whatYouLike = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;

  topReview.whatYouDidntLike = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;

  topReview.reviewDate = `${months[Math.floor(Math.random() * Math.floor(months.length))]} ${days[Math.floor(Math.random() * Math.floor(days.length))]}, ${years[Math.floor(Math.random() * Math.floor(years.length))]}`;

  if (topReview.rating < 3) {
    topReview.reviewTitle = `${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;
  } else {
    topReview.reviewTitle = `${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}`;
  }

  if (topReview.rating < 3) {
    topReview.reviewBody = `I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} how ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} they are in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}. I feel they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]} and ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}. I ${negativeVerbs[Math.floor(Math.random() * Math.floor(negativeVerbs.length))]} them, especially because they are ${negativeAdjectives[Math.floor(Math.random() * Math.floor(negativeAdjectives.length))]}.`
  } else {
    topReview.reviewBody = `I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} how ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} they are in the ${topsNouns[Math.floor(Math.random() * Math.floor(topsNouns.length))]}. I feel they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]} and ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}. I ${positiveVerbs[Math.floor(Math.random() * Math.floor(positiveVerbs.length))]} them, especially because they are ${positiveAdjectives[Math.floor(Math.random() * Math.floor(positiveAdjectives.length))]}.`
  }

  topReview.wasThisReviewHelpfulYes = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  topReview.wasThisReviewHelpfulNo = wasThisReviewHelpful[Math.floor(Math.random() * Math.floor(wasThisReviewHelpful.length))];

  return topReview;
};

const createReviews = (productCategory) => {
  let reviewsArr = [];
  if (productCategory === 'tops') {
    for (let i = 0; i < 10; i++) {
      reviewsArr.push(createTops());
    }
  }
  if (productCategory === 'bottoms') {
    for (let i = 0; i < 10; i++) {
      reviewsArr.push(createBottoms());
    }
  }
  return reviewsArr;
}



// const insertMockData = () => {

// }