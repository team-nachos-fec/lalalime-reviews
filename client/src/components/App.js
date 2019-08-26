import React from 'react';
import FiltersAndSorts from './FiltersAndSorts';
import Reviews from './Reviews'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };

    this.getReviews = this.getReviews.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleAthleticClick = this.handleAthleticClick.bind(this);
    this.handleAgeClick = this.handleAgeClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.filterReviewsByRating = this.filterReviewsByRating.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios
      .get('/api')
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  filterReviewsByRating(rating) {
    console.log(rating);
    axios
      .get(`api/filter-by-rating/${rating}`, { rating })
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  handleSortClick(event) {
    event.preventDefault();
    console.log('clicked');
    $('#sort-dropdown').toggleClass('show');
  }

  handleRatingClick(event) {
    event.preventDefault();
    console.log('clicked');
    $('#rating-dropdown').addClass('show');

    $(':not(#rating-dropdown)').on('click', function() {
      console.log('elsewhere clicked')
      $('#rating-dropdown').addClass('hide');
      // $('#rating-dropdown').addClass('show');
    });
    
    // $('body').click(function() {
    //   $('#rating-dropdown').addClass('hide');
    // });
  }



  handleAthleticClick(event) {
    event.preventDefault();
    console.log('clicked');
    $('#athletic-dropdown').toggleClass('show');
    // $('body').click(function() {
    //   $('#athletic-dropdown').addClass('hide');
    // });
  }

  handleAgeClick(event) {
    event.preventDefault();
    console.log('clicked');
    $('#age-dropdown').toggleClass('show');
    // $('body').click(function() {
    //   $('#age-dropdown').addClass('hide');
    // });
  }

  handleBodyClick(event) {
    event.preventDefault();
    console.log('clicked');
    $('#body-dropdown').toggleClass('show');
    // $('body').click(function() {
    //   $('#body-dropdown').addClass('hide');
    // });
  }

  render() {
    let sum = 0;
    for (var i = 0; i < this.state.reviews.length; i++) {
      sum += this.state.reviews[i].rating;
    }
    let average = sum / this.state.reviews.length;
    let averageString = average.toString().split('.').join('_');

    return (
      <div>
        <div className="review-header">
          <div className="reviews-title">
            reviews
          </div>
          <div className="review-question">
            How's this gear working for you?
          </div>
          <div className="average-rating">
            <img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${averageString}/5/rating.gif`} alt={`${average} out of 5`} title={`${average} out of 5`}/>
          </div>
          <div>
            <a href="#" title="Create a review" className="create-review">create a review</a>
          </div>
        </div>
        <div>
          <div><FiltersAndSorts 
          handleSortClick={this.handleSortClick} 
          handleRatingClick={this.handleRatingClick} 
          handleAthleticClick={this.handleAthleticClick} 
          handleAgeClick={this.handleAgeClick} 
          handleBodyClick={this.handleBodyClick} 
          filterReviewsByRating={this.filterReviewsByRating}
          /></div>
          <div className="separator"></div>
          <div>
            <div>
              <div className="reviews">
                <Reviews reviews={this.state.reviews} />
              </div>
            </div>
          </div>
          <div className="review-page-links">
            <a href="#" title="1">1</a>
            <a href="#" title="2">2</a>
            <a href="#" title="3">3</a>
            <a href="#" title="4">4</a>
            <a href="#" title="5">5</a>
            <a href="#" title="next">next</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;