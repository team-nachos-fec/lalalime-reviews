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

    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleAthleticClick = this.handleAthleticClick.bind(this);
    this.handleAgeClick = this.handleAgeClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.filterReviewsByRating = this.filterReviewsByRating.bind(this);
    this.filterReviewsByAthleticType = this.filterReviewsByAthleticType.bind(this);
    this.filterReviewsByAge = this.filterReviewsByAge.bind(this);
    this.filterReviewsByBodyType = this.filterReviewsByBodyType.bind(this);
    this.sortByFeatured = this.sortByFeatured.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByRatingDescending = this.sortByRatingDescending.bind(this);
    this.sortByRatingAscending = this.sortByRatingAscending.bind(this);
    this.handleRemoveFiltersClick = this.handleRemoveFiltersClick.bind(this);
  }

  componentDidMount() {
    this.sortByDate();
  }

  filterReviewsByRating(rating) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-rating/${rating}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  filterReviewsByAthleticType(athleticType) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-athletic-type/${athleticType}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  filterReviewsByAge(ageRange) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-age-range/${ageRange}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  filterReviewsByBodyType(bodyType) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-body-type/${bodyType}`)
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  sortByFeatured() {
    axios
      .get('/api/sort-by-featured')
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  sortByDate() {
    axios
      .get('/api/sort-by-date')
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  sortByRatingDescending() {
    axios
      .get('/api/sort-by-rating-descending')
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  sortByRatingAscending() {
    axios
      .get('/api/sort-by-rating-ascending')
      .then((reviews) => {
        this.setState({
          reviews: reviews.data
        })
      })
      .catch(err => console.error(err));
  }

  handleSortClick(event) {
    event.preventDefault();
    $('#sort-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#sort-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleRatingClick(event) {
    event.preventDefault();
    $('#rating-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#rating-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleAthleticClick(event) {
    event.preventDefault();
    $('#athletic-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#athletic-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleAgeClick(event) {
    event.preventDefault();
    $('#age-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#age-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleBodyClick(event) {
    event.preventDefault();
    $('#body-dropdown').toggleClass('show');
    window.onclick = function(event) {
      if (!event.target.matches('#body-dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  handleRemoveFiltersClick(event) {
    event.preventDefault();
    this.sortByDate();
    $('#filter-popin').hide()
    $('#filtered-rating-disclaimer').hide();
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
          <div id="filtered-rating-disclaimer">&#40;based on current filters&#41;</div>
          <div className="average-rating">
            <img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${averageString}/5/rating.gif`} alt={`${average} out of 5`} title={`${average} out of 5`}/>
          </div>
          <div>
            <a href="#" title="Create a review" className="create-review">create a review</a>
          </div>
        </div>
        <div>
          <div><FiltersAndSorts
          handleElsewhereButSortClick={this.handleElsewhereButSortClick}
          reviews={this.state.reviews}
          handleSortClick={this.handleSortClick} 
          handleRatingClick={this.handleRatingClick} 
          handleAthleticClick={this.handleAthleticClick} 
          handleAgeClick={this.handleAgeClick} 
          handleBodyClick={this.handleBodyClick} 
          filterReviewsByRating={this.filterReviewsByRating}
          filterReviewsByAthleticType={this.filterReviewsByAthleticType}
          filterReviewsByAge={this.filterReviewsByAge}
          filterReviewsByBodyType={this.filterReviewsByBodyType}
          sortByFeatured={this.sortByFeatured}
          sortByDate={this.sortByDate}
          sortByRatingDescending={this.sortByRatingDescending}
          sortByRatingAscending={this.sortByRatingAscending}
          />
          </div>
          <div id="filter-popin">
            {/* <div>{`Show me  reviews with `}</div> 
            <div><span>filter type</span><span>filter item</span></div> */}
            <div><a href="" onClick={(event) => {this.handleRemoveFiltersClick(event)}}>&#x2715; remove all filters</a></div>
          </div>
          <div className="separator"></div>
          <div>
            <div>
              <div className="reviews">
                <Reviews reviews={this.state.reviews} />
              </div>
            </div>
          </div>
          <div className="review-page-links">
            <a href="#" title="1" id="highlighted">1</a>
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