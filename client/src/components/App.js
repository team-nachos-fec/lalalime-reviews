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

  render() {
    return (
      <div>
        <div className="review-header">
          <div className="reviews-title">
            reviews
          </div>
          <div className="review-question">
            How's this gear working for you?
          </div>
          <div className="overall-review">
            <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/3_7/5/rating.gif" alt="3.7 out of 5" title="3.7 out of 5"/>
          </div>
          <div>
            <a href="#" title="Create a review" className="create-review">create a review</a>
          </div>
        </div>
        <div>
          <div><FiltersAndSorts /></div>
          <div className="parent">
            <div className="separator"></div>
            <div className="review">
              <div>
                <Reviews reviews={this.state.reviews} />
              </div>
            </div>
            <div className="review-separator"></div>
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