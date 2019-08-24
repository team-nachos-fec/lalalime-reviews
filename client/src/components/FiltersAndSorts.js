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
              <a href="url">1 star</a>
              <a href="url">2 stars</a>
              <a href="url">3 stars</a>
              <a href="url">4 stars</a>
              <a href="url">5 stars</a>
            </div>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="url">yogi</a>
              <a href="url">runner</a>
              <a href="url">dancer</a>
              <a href="url">cyclist</a>
              <a href="url">sweaty generalist</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="url">under 18</a>
              <a href="url">18-24</a>
              <a href="url">25-34</a>
              <a href="url">35-44</a>
              <a href="url">45-54</a>
              <a href="url">55-65</a>
              <a href="url">over 65</a>
              <a href="url">i prefer to keep my age on the d.l.</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="url">athelic</a>
              <a href="url">curvy</a>
              <a href="url">lean</a>
              <a href="url">muscular</a>
              <a href="url">petite</a>
              <a href="url">slim</a>
              <a href="url">solid</a>
            </span>
          </div>
          <div className="sort-dropdown">
            <button onClick="myFunction()" className="dropbtn" title="See more 'athletic type' filters">choose a sort order<i className="fa fa-caret-down"></i></button>
            <span className="dropdown-content">
              <a href="url">choose a sort order</a>
              <a href="url">featured reviews first</a>
              <a href="url">date-newest first</a>
              <a href="url">rating-high to low</a>
              <a href="url">rating-low to high</a>
            </span>
          </div>
          {/* <span className="sort-dropdown">
          <select className="dropdown" className="dropbtn" >
            <option value="choose">choose a sort order</option>
            <option value="API ENDPOINT">featured reviews first</option>
            <option value="API ENDPOINT">date-newest first</option>
            <option value="API ENDPOINT">rating-high to low</option>
            <option value="API ENDPOINT">rating-low to high</option>
          </select>
          </span> */}
        </div>
      </div>
    )
  }
}

export default FiltersAndSorts;