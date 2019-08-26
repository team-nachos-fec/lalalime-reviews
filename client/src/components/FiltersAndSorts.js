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
              <a href="#" onClick={()=> {this.props.filterReviewsByRating(1)}}>1 star &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByRating(2)}}>2 stars &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByRating(3)}}>3 stars &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByRating(4)}}>4 stars &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByRating(5)}}>5 stars &#40;0&#41;</a>
            </div>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAthleticClick(event)}} className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span id="athletic-dropdown" className="dropdown-content">
              <a href="#" onClick={()=> {this.props.filterReviewsByAthleticType('yogi')}}>yogi &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAthleticType('runner')}}>runner &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAthleticType('dancer')}}>dancer &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAthleticType('cyclist')}}>cyclist &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAthleticType('sweaty-generalist')}}>sweaty generalist &#40;0&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAgeClick(event)}} className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span id="age-dropdown" className="dropdown-content">
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('under-18')}}>under 18 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('18-24')}}>18-24 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('25-34')}}>25-34 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('35-44')}}>35-44 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('45-54')}}>45-54 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('55-65')}}>55-65 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('over-65')}}>over 65 &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByAge('i-keep-my-age-on-the-dl')}}>i keep my age on the d.l. &#40;0&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleBodyClick(event)}} className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span id="body-dropdown" className="dropdown-content">
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('athletic')}}>athletic &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('curvy')}}>curvy &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('lean')}}>lean &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('muscular')}}>muscular &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('petite')}}>petite &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('slim')}}>slim &#40;0&#41;</a>
              <a href="#" onClick={()=> {this.props.filterReviewsByBodyType('solid')}}>solid &#40;0&#41;</a>
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