import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div className="review-title">
          reviews
        </div>
        <div>
          How's this gear working for you?
        </div>
        <div>
          <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/3_7/5/rating.gif" alt="3.7 out of 5" title="3.7 out of 5"/>
        </div>
        <div>
          <a href="url" title="Create a review" className="create-review">create a review</a>
        </div>
        <div>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'rating' filters">rating</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">1 star</a>
              <a href="#">2 stars</a>
              <a href="#">3 stars</a>
              <a href="#">4 stars</a>
              <a href="#">5 stars</a>
            </div>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'athletic type' filters">athelic type</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">yogi</a>
              <a href="#">runner</a>
              <a href="#">dancer</a>
              <a href="#">cyclist</a>
              <a href="#">sweaty generalist</a>
            </div>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'age' filters">age</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">under 18</a>
              <a href="#">18-24</a>
              <a href="#">25-34</a>
              <a href="#">35-44</a>
              <a href="#">45-54</a>
              <a href="#">55-65</a>
              <a href="#">over 65</a>
              <a href="#">i prefer to keep my age on the d.l.</a>
            </div>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'body type' filters">body type</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">athelic</a>
              <a href="#">curvy</a>
              <a href="#">lean</a>
              <a href="#">muscular</a>
              <a href="#">petite</a>
              <a href="#">slim</a>
              <a href="#">solid</a>
            </div>
          </span>
          <span className="dropdown">
          <select className="dropdown">
            <option value="choose">choose a sort order</option>
            <option value="API ENDPOINT">featured reviews first</option>
            <option value="API ENDPOINT">date-newest first</option>
            <option value="API ENDPOINT">rating-high to low</option>
            <option value="API ENDPOINT">rating-low to high</option>
          </select>
          </span>
        </div>
        <div className="review">
          <div className="review-profile">
            <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/5_0/5/rating.gif" alt="5 out of 5" title="5 out of 5"/>
            <div>username</div>
            {/* TODO: MAKE POPUP WHEN HOVERED OVER */}
            <div>athletic type</div>
            <div>body type</div>
            <div>what you like</div>
            <div>what you don't like</div>
          </div>
        </div>
        <div className="review-content">
          <div>review date</div>
          <div>review title</div>
          <div>review body</div>
          <div className="review-footer">
            <span>was this reivew helpful to you</span>
            <span><a href="#" title="Yes">yes</a></span>
            {/* TODO: MAKE POPUP WHEN CLICKED */}
            {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
            <span><a href="#" title="No">no</a></span>
            {/* TODO: MAKE POPUP WHEN CLICKED */}
            {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
            <span><a href="#" title="Report">report as inappropriate</a></span>
            {/* TODO: MAKE POPUP WHEN CLICKED */}
          </div>
        </div>
      </div>
    );
  }

}

export default App;