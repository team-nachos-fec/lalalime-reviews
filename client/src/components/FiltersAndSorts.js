import React from 'react';

class FiltersAndSorts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    return (
      <div>
        <div className="filters-and-sorts">
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'rating' filters">rating</button>
            <span id="myDropdown" className="dropdown-content">
              <a href="#">1 star</a>
              <a href="#">2 stars</a>
              <a href="#">3 stars</a>
              <a href="#">4 stars</a>
              <a href="#">5 stars</a>
            </span>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'athletic type' filters">athelic type</button>
            <span id="myDropdown" className="dropdown-content">
              <a href="#">yogi</a>
              <a href="#">runner</a>
              <a href="#">dancer</a>
              <a href="#">cyclist</a>
              <a href="#">sweaty generalist</a>
            </span>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'age' filters">age</button>
            <span id="myDropdown" className="dropdown-content">
              <a href="#">under 18</a>
              <a href="#">18-24</a>
              <a href="#">25-34</a>
              <a href="#">35-44</a>
              <a href="#">45-54</a>
              <a href="#">55-65</a>
              <a href="#">over 65</a>
              <a href="#">i prefer to keep my age on the d.l.</a>
            </span>
          </span>
          <span className="dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'body type' filters">body type</button>
            <span id="myDropdown" className="dropdown-content">
              <a href="#">athelic</a>
              <a href="#">curvy</a>
              <a href="#">lean</a>
              <a href="#">muscular</a>
              <a href="#">petite</a>
              <a href="#">slim</a>
              <a href="#">solid</a>
            </span>
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
      </div>
    )
  }
}

export default FiltersAndSorts;