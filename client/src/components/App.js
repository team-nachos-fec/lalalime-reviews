import React from 'react';
import FiltersAndSorts from './FiltersAndSorts';
import Reviews from './Reviews'
import ReviewPageLinks from './ReviewPageLinks';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      filter: '',
      rating: '',
      athleticType: '',
      age: '',
      bodyType: ''
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
        if (rating === 1) {
          this.setState({
            reviews: reviews.data,
            filter: 'rating',
            rating: '1 star'
          });
        } else if (rating === 2) {
          this.setState({
            reviews: reviews.data,
            filter: 'rating',
            rating: '2 stars'
          });
        } else if (rating === 3) {
          this.setState({
            reviews: reviews.data,
            filter: 'rating',
            rating: '3 stars'
          });
        } else if (rating === 4) {
          this.setState({
            reviews: reviews.data,
            filter: 'rating',
            rating: '4 stars'
          });
        } else {
          this.setState({
            reviews: reviews.data,
            filter: 'rating',
            rating: '5 stars'
          });
        }
      })
      .catch(err => console.error(err));
  }

  filterReviewsByAthleticType(athleticType) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-athletic-type/${athleticType}`)
      .then((reviews) => {
        if (athleticType === 'yogi') {
          this.setState({
            reviews: reviews.data,
            filter: 'athletic type',
            athleticType: 'yogi'
          });
        } else if (athleticType === 'runner') {
          this.setState({
            reviews: reviews.data,
            filter: 'athletic type',
            athleticType: 'runner'
          });
        } else if (athleticType === 'dancer') {
          this.setState({
            reviews: reviews.data,
            filter: 'athletic type',
            athleticType: 'dancer'
          });
        } else if (athleticType === 'cyclist') {
          this.setState({
            reviews: reviews.data,
            filter: 'athletic type',
            athleticType: 'cyclist'
          });
        } else {
          this.setState({
            reviews: reviews.data,
            filter: 'athletic type',
            athleticType: 'sweaty generalist'
          });
        }
      })
      .catch(err => console.error(err));
  }

  filterReviewsByAge(ageRange) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-age-range/${ageRange}`)
      .then((reviews) => {
        if (ageRange === 'under-18') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: 'under 18'
          });
        } else if (ageRange === '18-24') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: '18-24'
          });
        } else if (ageRange === '25-34') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: '25-34'
          });
        } else if (ageRange === '35-44') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: '35-44'
          });
        }  else if (ageRange === '45-54') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: '45-54'
          });
        } else if (ageRange === '55-65') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: '55-65'
          });
        }  else if (ageRange === 'over-65') {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: 'over 65'
          });
        } else {
          this.setState({
            reviews: reviews.data,
            filter: 'age',
            age: 'i keep my age on the d.l.'
          });
        }
      })
      .catch(err => console.error(err));
  }

  filterReviewsByBodyType(bodyType) {
    $('#filter-popin').show();
    $('#filtered-rating-disclaimer').show();
    axios
      .get(`/api/filter-by-body-type/${bodyType}`)
      .then((reviews) => {
        if (bodyType === 'athletic') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'athletic'
          });
        } else if (bodyType === 'curvy') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'curvy'
          });
        } else if (bodyType === 'lean') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'lean'
          });
        } else if (bodyType === 'muscular') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'muscular'
          });
        } else if (bodyType === 'petite') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'petite'
          });
        } else if (bodyType === 'slim') {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'slim'
          });
        } else {
          this.setState({
            reviews: reviews.data,
            filter: 'body type',
            bodyType: 'solid'
          });
        }
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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
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

    let reviewNumber = this.state.reviews.length;
    let filter = this.state.filter;
    let filterCriteria;

    if (filter === 'rating') {
      filterCriteria = this.state.rating;
    } else if (filter === 'athletic type') {
      filterCriteria = this.state.athleticType;
    } else if (filter === 'age') {
      filterCriteria = this.state.age;
    } else {
      filterCriteria = this.state.bodyType;
    }

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
            <div id="show-review-number">{`Show me ${reviewNumber} reviews with`}</div> 
            <div id="filter-and-number" >
              <span id="filter-type">{filter}</span>
              <span>
                <a href=""onClick={(event) => {this.handleRemoveFiltersClick(event)}}>
                <span id="filter-criteria">{filterCriteria}</span><span id="filter-number">{`(${reviewNumber})`}</span>
                </a>
              </span>
            </div>
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
          <ReviewPageLinks />
        </div>
      </div>
    );
  }
}

export default App;