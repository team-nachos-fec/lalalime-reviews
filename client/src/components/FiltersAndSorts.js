import React from 'react';

class FiltersAndSorts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  handleClick(event) {
    
  }

  render() {
    return (
      <div>
        <div className="filters-and-sorts">
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'rating' filters">rating<i className="fa fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#">1 star</a>
              <a href="#">2 stars</a>
              <a href="#">3 stars</a>
              <a href="#">4 stars</a>
              <a href="#">5 stars</a>
            </div>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="#">yogi</a>
              <a href="#">runner</a>
              <a href="#">dancer</a>
              <a href="#">cyclist</a>
              <a href="#">sweaty generalist</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="#">under 18</a>
              <a href="#">18-24</a>
              <a href="#">25-34</a>
              <a href="#">35-44</a>
              <a href="#">45-54</a>
              <a href="#">55-65</a>
              <a href="#">over 65</a>
              <a href="#">i prefer to keep my age on the d.l.</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="#">athelic</a>
              <a href="#">curvy</a>
              <a href="#">lean</a>
              <a href="#">muscular</a>
              <a href="#">petite</a>
              <a href="#">slim</a>
              <a href="#">solid</a>
            </span>
          </div>
          <span className="sort-dropdown">
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