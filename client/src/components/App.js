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
          <div className="review-title">
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
          <div> <FiltersAndSorts /> </div>
          <div className="separator"></div>
          <div className="review">
            <div><ReviewProfile /></div>
            <div><ReviewContent /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;