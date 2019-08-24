import React from 'react';
import FiltersAndSorts from './FiltersAndSorts';
import ReviewProfile from './ReviewProfile';
import ReviewContent from './ReviewContent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

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
            <a href="url" title="Create a review" className="create-review">create a review</a>
          </div>
        </div>
        <div>
          <div><FiltersAndSorts /></div>
          <div className="parent">
            <div className="separator"></div>
            <div className="review">
              <div><ReviewProfile /></div>
              <div><ReviewContent /></div>
            </div>
            <div className="review-separator"></div>
          </div>
          <div className="review-page-links">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">next</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;