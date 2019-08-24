import React from 'react';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  
  }

  render() {
    return (
      <div className="review-content">
        <div className="review-date">August 24, 2019</div>
        <div className="review-title">review title</div>
        <div className="review-body">review body asdfasdf asdfasdf asdf asdf asdf asdf asdfasdfaasdfasdfadfsdfasdfasdfasdfasdf asdfasdf asf sf adsf asdf asdf asdf asdf asdfsdfasdf asdf asdfa aasdfasdfsafasdf</div>
        <div className="review-footer">
          <span className="footer-question">Was this reivew helpful to you?</span>
          <span className="footer-answer"><a href="" title="Yes" >yes &#40; 0 &#41;</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
          {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
          <span className="footer-answer"><a href="" title="No">no &#40; 0 &#41;</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
          {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
          <span className="footer-report"><a href="" title="Report">report as inappropriate</a></span>
          {/* TODO: MAKE POPUP WHEN CLICKED */}
        </div>
      </div>
    )
  }
}

export default ReviewContent;