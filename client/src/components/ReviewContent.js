import React from 'react';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulYes: this.props.review.wasThisReviewHelpfulYes,
      helpfulNo: this.props.review.wasThisReviewHelpfulNo,
      clickableLinkForYes: true,
      clickableLinkForNo: true
    };
  
    this.handleReportButtonClick = this.handleReportButtonClick.bind(this);
    this.handleReportLinkClick = this.handleReportLinkClick.bind(this);
    this.handleHelpfulYesClick = this.handleHelpfulYesClick.bind(this);
    this.handleHelpfulNoClick = this.handleHelpfulNoClick.bind(this);
    this.handleHelpfulCloseClick = this.handleHelpfulCloseClick.bind(this);
  }
  
  handleReportLinkClick(event) {
    event.preventDefault();
    $('#report-popup').show();
  }

  handleReportButtonClick(event) {
    event.preventDefault();
    $('#report-popup').hide();
  }

  handleHelpfulYesClick(event) {
    event.preventDefault();
    if (this.state.helpfulYes === this.props.review.wasThisReviewHelpfulYes) {
      console.log('increment');
      $('#thank-you-popup').show();
      this.setState({
        helpfulYes: this.props.review.wasThisReviewHelpfulYes + 1,
        clickableLinkForNo: false
      });
    } if (this.state.helpfulYes === this.props.review.wasThisReviewHelpfulYes + 1) {
      console.log('decrement');
      this.setState({
        helpfulYes: this.props.review.wasThisReviewHelpfulYes,
        clickableLinkForNo: true
      });
    }
  }

  handleHelpfulNoClick(event) {
    event.preventDefault();
    if (this.state.helpfulNo === this.props.review.wasThisReviewHelpfulNo) {
      $('#thank-you-popup').show();
      this.setState({
        helpfulNo: this.props.review.wasThisReviewHelpfulNo + 1,
        clickableLinkForYes: false
      });
    } if (this.state.helpfulNo === this.props.review.wasThisReviewHelpfulNo + 1) {
      this.setState({
        helpfulNo: this.props.review.wasThisReviewHelpfulNo,
        clickableLinkForYes: true
      });
    }
  }

  handleHelpfulCloseClick(event) {
    event.preventDefault();
    $('#thank-you-popup').hide();
  }

  render() {
    if (this.props.review.ageRange === 'i-keep-my-age-on-the-dl') {
      this.props.review.ageRange = 'i keep my age on the d.l.'
    }

    const clickableLinkForYes = this.state.clickableLinkForYes;
    const clickableLinkForNo = this.state.clickableLinkForNo;
    let yesLink;
    let noLink;

    if (clickableLinkForYes === false) {
      yesLink = <span className="footer-answer"><a href="" title="Yes" style={{ pointerEvents: 'none' }} onClick={(event) => {this.handleHelpfulYesClick(event)}}>yes &#40; {this.state.helpfulYes} &#41;</a></span>
    } else {
      yesLink = <span className="footer-answer"><a href="" title="Yes" onClick={(event) => {this.handleHelpfulYesClick(event)}} >yes &#40; {this.state.helpfulYes} &#41;</a></span>
    }

    if (clickableLinkForNo === false) {
      noLink = <span className="footer-answer"><a href="" title="No" style={{ pointerEvents: 'none' }} onClick={(event) => {this.handleHelpfulNoClick(event)}}>no &#40; {this.state.helpfulNo} &#41;</a></span>
    } else {
      noLink = <span className="footer-answer"><a href="" title="No" onClick={(event) => {this.handleHelpfulNoClick(event)}}>no &#40; {this.state.helpfulNo} &#41;</a></span>
    }

    return (
      <div className="container">
        <div className="review-profile">
          <div className="rating"><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${this.props.review.rating}_0/5/rating.gif`} alt={`${this.props.review.rating} out of 5`} title={`${this.props.review.rating} out of 5`}/></div>
          <div className="username">{this.props.review.username}</div>
          {/* TODO: MAKE POPUP WHEN HOVERED OVER */}
          <div className="user-properties">
            <div className="user-property"><span className="lighter">location: </span><span className="bolder">{this.props.review.location.toUpperCase()}</span></div>
            <div className="user-property"><span className="lighter">athletic type: </span><span className="bolder">{this.props.review.athleticType.toUpperCase()}</span></div>
            <div className="user-property"><span className="lighter">age: </span><span className="bolder">{this.props.review.ageRange.toUpperCase()}</span></div>
            <div className="user-property"><span className="lighter">body type: </span><span className="bolder">{this.props.review.bodyType.toUpperCase()}</span></div>
          </div>
          <div className="profile-property"><div className="bolder">what you like</div><div className="lighter">{this.props.review.whatYouLike}</div></div>
          <div className="profile-property"><div className="bolder">what you don't like</div><div className="lighter">{this.props.review.whatYouDidntLike}</div></div>
        </div>
        <div className="review-content">
          <div className="review-date">{this.props.review.reviewDate.toUpperCase()}</div>
          <div className="review-title">{this.props.review.reviewTitle}</div>
          <div className="review-body">{this.props.review.reviewBody}</div>
          <div className="review-footer">
            <span className="footer-question">Was this reivew helpful to you?</span>
            {yesLink}
            {noLink}
            <span className="footer-report"><a href="" title="Report"
            onClick={(event) => {this.handleReportLinkClick(event)}}
            >report as inappropriate</a></span>
            <div id="report-popup">
              <span>describe the issue</span>
              <form>
                <div className="report-form">
                  <textarea type="text" name="name" id="name" required></textarea>
                </div>
                <div className="report-form-btns">
                  <input className="submit-btn" type="submit" value="Submit" 
                  onClick={(event) => {this.handleReportButtonClick(event)}} />
                  <input className="cancel-btn" type="submit" value="Cancel" 
                  onClick={(event) => {this.handleReportButtonClick(event)}} />
                </div>
              </form>
          </div>
            </div>
            <div id="thank-you-popup">
            <span id="popup-text">Thank you! You have successfully submitted feedback for this review.</span>
            <a href="" title="Close" id="popup-close-button" onClick={(event) => {this.handleHelpfulCloseClick(event)}}>&#x2715;</a>
            </div>
        </div>
      </div>
    )
  }
}

export default ReviewContent;