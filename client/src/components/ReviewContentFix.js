import React from 'react';

class ReviewContentFix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  
  }

  render() {
    return (
      <div>
        <div>
          <div className="review-profile">

          </div>
          <div className="reviewContent">
            
          </div>
        </div>
      </div>




      // <div  className="green">
        
      //   <div className="review-profile">
      //     <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/5_0/5/rating.gif" alt="5 out of 5" title="5 out of 5"/>
      //     <div className="username">{this.props.review.username}</div>
      //     {/* TODO: MAKE POPUP WHEN HOVERED OVER */}
      //     <div className="user-properties">
      //       <div className="user-property"><span className="lighter">location: </span><span className="bolder">{this.props.review.username.toUpperCase()}</span></div>
      //       <div className="user-property"><span className="lighter">athletic type: </span><span className="bolder">{this.props.review.athleticType.toUpperCase()}</span></div>
      //       <div className="user-property"><span className="lighter">age: </span><span className="bolder">{this.props.review.ageRange.toUpperCase()}</span></div>
      //       <div className="user-property"><span className="lighter">body type: </span><span className="bolder">{this.props.review.bodyType.toUpperCase()}</span></div>
      //     </div>
      //     <div className="profile-property"><div className="bolder">what you like</div><div className="lighter">{this.props.review.whatYouLike}</div></div>
      //     <div className="profile-property"><div className="bolder">what you don't like</div><div className="lighter">{this.props.review.whatYouDidntLike}</div></div>
      //   </div>
      //   <div className="review-content">
      //     <div className="review-date">{this.props.review.reviewDate.toUpperCase()}</div>
      //     <div className="review-title">{this.props.review.reviewTitle}</div>
      //     <div className="review-body">{this.props.review.reviewBody}</div>
      //     <div className="review-footer">
      //       <span className="footer-question">Was this reivew helpful to you?</span>
      //       <span className="footer-answer"><a href="" title="Yes" >yes &#40; {this.props.review.wasThisReviewHelpfulYes} &#41;</a></span>
      //       {/* TODO: MAKE POPUP WHEN CLICKED */}
      //       {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
      //       <span className="footer-answer"><a href="" title="No">no &#40; {this.props.review.wasThisReviewHelpfulNo} &#41;</a></span>
      //       {/* TODO: MAKE POPUP WHEN CLICKED */}
      //       {/* TODO: CONDITIALLY RENDER NUMBER TO INCREASE OR DECREASE WHEN CLICKED */}
      //       <span className="footer-report"><a href="" title="Report">report as inappropriate</a></span>
      //       {/* TODO: MAKE POPUP WHEN CLICKED */}
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default ReviewContentFix;