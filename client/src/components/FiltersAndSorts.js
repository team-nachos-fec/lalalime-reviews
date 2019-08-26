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
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleRatingClick(event)}} id="rating-dropbtn" className="dropbtn" title="See more 'rating' filters">rating<i className="fa fa-caret-down"></i></button>
            <div id="rating-dropdown" className="dropdown-content">
              <a href="#">1 star &#40;0&#41;</a>
              <a href="#">2 stars &#40;0&#41;</a>
              <a href="#">3 stars &#40;0&#41;</a>
              <a href="#" onClick={(rating)=> {this.props.filterReviewsByRating(rating)}}>4 stars &#40;0&#41;</a>
              <a href="#">5 stars &#40;0&#41;</a>
            </div>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAthleticClick(event)}} className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span id="athletic-dropdown" className="dropdown-content">
              <a href="#">yogi &#40;0&#41;</a>
              <a href="#">runner &#40;0&#41;</a>
              <a href="#">dancer &#40;0&#41;</a>
              <a href="#">cyclist &#40;0&#41;</a>
              <a href="#">sweaty generalist &#40;0&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAgeClick(event)}} className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span id="age-dropdown" className="dropdown-content">
              <a href="#">under 18 &#40;0&#41;</a>
              <a href="#">18-24 &#40;0&#41;</a>
              <a href="#">25-34 &#40;0&#41;</a>
              <a href="#">35-44 &#40;0&#41;</a>
              <a href="#">45-54 &#40;0&#41;</a>
              <a href="#">55-65 &#40;0&#41;</a>
              <a href="#">over 65 &#40;0&#41;</a>
              <a href="#">i prefer to keep my age on the d.l. &#40;0&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleBodyClick(event)}} className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span id="body-dropdown" className="dropdown-content">
              <a href="#">athletic &#40;0&#41;</a>
              <a href="#">curvy &#40;0&#41;</a>
              <a href="#">lean &#40;0&#41;</a>
              <a href="#">muscular &#40;0&#41;</a>
              <a href="#">petite &#40;0&#41;</a>
              <a href="#">slim &#40;0&#41;</a>
              <a href="#">solid &#40;0&#41;</a>
            </span>
          </div>
          <div className="sort-dropdown">
            <button onClick={(event)=>{this.props.handleSortClick(event)}} id="sort-dropbtn" className="dropbtn" title="See more 'athletic type' filters">choose a sort order<i className="fa fa-caret-down"></i></button>
            <span id="sort-dropdown" className="dropdown-content">
              <a href="#">choose a sort order &#40;0&#41;</a>
              <a href="#">featured reviews first &#40;0&#41;</a>
              <a href="#">date-newest first &#40;0&#41;</a>
              <a href="#">rating-high to low &#40;0&#41;</a>
              <a href="#">rating-low to high &#40;0&#41;</a>
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