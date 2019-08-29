import React from 'react';

class FiltersAndSorts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    let reviews = this.props.reviews;

    let oneStarCount = 0;
    let twoStarCount = 0;
    let threeStarCount = 0;
    let fourStarCount = 0;
    let fiveStarCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].rating === 1) {
        oneStarCount++;
      }
      if (reviews[i].rating === 2) {
        twoStarCount++;
      }
      if (reviews[i].rating === 3) {
        threeStarCount++;
      }
      if (reviews[i].rating === 4) {
        fourStarCount++;
      }
      if (reviews[i].rating === 5) {
        fiveStarCount++;
      }
    }

    let yogiCount = 0;
    let runnerCount = 0;
    let dancerCount = 0;
    let cyclistCount = 0;
    let sweatyCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].athleticType === 'yogi') {
        yogiCount++;
      }
      if (reviews[i].athleticType === 'runner') {
        runnerCount++;
      }
      if (reviews[i].athleticType === 'dancer') {
        dancerCount++;
      }
      if (reviews[i].athleticType === 'cyclist') {
        cyclistCount++;
      }
      if (reviews[i].athleticType === 'sweaty-generalist') {
        sweatyCount++;
      }
    }

    let firstAgeCount = 0;
    let secondAgeCount = 0;
    let thirdAgeCount = 0;
    let fourthAgeCount = 0;
    let fifthAgeCount = 0;
    let sixthAgeCount = 0;
    let seventhAgeCount = 0;
    let eighthAgeCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].ageRange === 'under-18') {
        firstAgeCount++;
      }
      if (reviews[i].ageRange === '18-24') {
        secondAgeCount++;
      }
      if (reviews[i].ageRange === '25-34') {
        thirdAgeCount++;
      }
      if (reviews[i].ageRange === '35-44') {
        fourthAgeCount++;
      }
      if (reviews[i].ageRange === '45-54') {
        fifthAgeCount++;
      }
      if (reviews[i].ageRange === '55-65') {
        sixthAgeCount++;
      }
      if (reviews[i].ageRange === 'over-65') {
        seventhAgeCount++;
      }
      if (reviews[i].ageRange === 'i-keep-my-age-on-the-dl') {
        eighthAgeCount++;
      }
    }

    let athleticCount = 0;
    let curvyCount = 0;
    let leanCount = 0;
    let muscularCount = 0;
    let petiteCount = 0;
    let slimCount = 0;
    let solidCount = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].bodyType === 'athletic') {
        athleticCount++;
      }
      if (reviews[i].bodyType === 'curvy') {
        curvyCount++;
      }
      if (reviews[i].bodyType === 'lean') {
        leanCount++;
      }
      if (reviews[i].bodyType === 'muscular') {
        muscularCount++;
      }
      if (reviews[i].bodyType === 'petite') {
        petiteCount++;
      }
      if (reviews[i].bodyType === 'slim') {
        slimCount++;
      }
      if (reviews[i].bodyType === 'solid') {
        solidCount++;
      }
    }
    
    return (
    <div>
        <div className="filters-and-sorts">
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleRatingClick(event)}} id="rating-dropbtn" className="dropbtn" title="See more 'rating' filters">rating<i className="fa fa-caret-down"></i></button>
            <div id="rating-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {this.props.filterReviewsByRating(1)}}>1 star &#40;{oneStarCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByRating(2)}}>2 stars &#40;{twoStarCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByRating(3)}}>3 stars &#40;{threeStarCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByRating(4)}}>4 stars &#40;{fourStarCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByRating(5)}}>5 stars &#40;{fiveStarCount}&#41;</a>
            </div>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAthleticClick(event)}} id="athletic-dropbtn"  className="dropbtn" title="See more 'athletic type' filters">athletic type<i className="fa fa-caret-down"></i></button>
            <span id="athletic-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {this.props.filterReviewsByAthleticType('yogi')}}>yogi &#40;{yogiCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAthleticType('runner')}}>runner &#40;{runnerCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAthleticType('dancer')}}>dancer &#40;{dancerCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAthleticType('cyclist')}}>cyclist &#40;{cyclistCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAthleticType('sweaty-generalist')}}>sweaty generalist &#40;{sweatyCount}&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleAgeClick(event)}} id="age-dropbtn" className="dropbtn" title="See more 'age' filters">age<i className="fa fa-caret-down"></i></button>
            <span id="age-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('under-18')}}>under 18 &#40;{firstAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('18-24')}}>18-24 &#40;{secondAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('25-34')}}>25-34 &#40;{thirdAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('35-44')}}>35-44 &#40;{fourthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('45-54')}}>45-54 &#40;{fifthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('55-65')}}>55-65 &#40;{sixthAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('over-65')}}>over 65 &#40;{seventhAgeCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByAge('i-keep-my-age-on-the-dl')}}>i keep my age on the d.l. &#40;{eighthAgeCount}&#41;</a>
            </span>
          </div>
          <div className="filter-dropdown">
            <button onClick={(event)=>{this.props.handleBodyClick(event)}} id="body-dropbtn" className="dropbtn" title="See more 'body type' filters">body type<i className="fa fa-caret-down"></i></button>
            <span id="body-dropdown" className="dropdown-content">
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('athletic')}}>athletic &#40;{athleticCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('curvy')}}>curvy &#40;{curvyCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('lean')}}>lean &#40;{leanCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('muscular')}}>muscular &#40;{muscularCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('petite')}}>petite &#40;{petiteCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('slim')}}>slim &#40;{slimCount}&#41;</a>
              <a href="#/" onClick={()=> {this.props.filterReviewsByBodyType('solid')}}>solid &#40;{solidCount}&#41;</a>
            </span>
          </div>
          <div className="sort-dropdown">
            <button onClick={(event)=>{this.props.handleSortClick(event)}} id="sort-dropbtn" className="dropbtn">choose a sort order<i className="fa fa-caret-down"></i></button>
            <span id="sort-dropdown" className="dropdown-content">
              {/* <a href="#">choose a sort order</a> */}
              <a href="#/" onClick={()=> {this.props.sortByFeatured()}} >featured reviews first</a>
              <a href="#/" onClick={()=> {this.props.sortByDate()}}>date-newest first</a>
              <a href="#/" onClick={()=> {this.props.sortByRatingDescending()}}>rating-high to low</a>
              <a href="#/" onClick={()=> {this.props.sortByRatingAscending()}}>rating-low to high</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default FiltersAndSorts;