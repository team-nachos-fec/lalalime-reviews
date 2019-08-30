import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ReviewContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helpfulYes: this.props.review.wasThisReviewHelpfulYes,
      helpfulNo: this.props.review.wasThisReviewHelpfulNo,
      clickableLinkForYes: true,
      clickableLinkForNo: true,
      isUserPopupShown: false,
      isReportPopupShown: false,
      isThankYouPopupShown: false
    };
  
    this.handleUsernameEnter = this.handleUsernameEnter.bind(this);
    this.handleUsernameLeave = this.handleUsernameLeave.bind(this);
    this.handleReportButtonClick = this.handleReportButtonClick.bind(this);
    this.handleReportLinkClick = this.handleReportLinkClick.bind(this);
    this.handleHelpfulYesClick = this.handleHelpfulYesClick.bind(this);
    this.handleHelpfulNoClick = this.handleHelpfulNoClick.bind(this);
    this.handleHelpfulCloseClick = this.handleHelpfulCloseClick.bind(this);
  }
  
  handleUsernameEnter(event) {
    event.preventDefault();
    this.setState({
      isUserPopupShown: !this.state.isUserPopupShown
    });
  }

  handleUsernameLeave(event) {
    event.preventDefault();
    this.setState({
      isUserPopupShown: false
    });
  }

  handleReportLinkClick(event) {
    event.preventDefault();
    this.setState({
      isReportPopupShown: !this.state.isReportPopupShown
    });
  }

  handleReportButtonClick(event) {
    event.preventDefault();
    this.setState({
      isReportPopupShown: false
    });
  }

  handleHelpfulYesClick(event) {
    event.preventDefault();
    if (this.state.helpfulYes === this.props.review.wasThisReviewHelpfulYes) {
      this.setState({
        helpfulYes: this.props.review.wasThisReviewHelpfulYes + 1,
        clickableLinkForNo: false,
        isThankYouPopupShown: !this.state.isThankYouPopupShown
      });
    } if (this.state.helpfulYes === this.props.review.wasThisReviewHelpfulYes + 1) {
      this.setState({
        helpfulYes: this.props.review.wasThisReviewHelpfulYes,
        clickableLinkForNo: true
      });
    }
  }

  handleHelpfulNoClick(event) {
    event.preventDefault();
    if (this.state.helpfulNo === this.props.review.wasThisReviewHelpfulNo) {
      this.setState({
        helpfulNo: this.props.review.wasThisReviewHelpfulNo + 1,
        clickableLinkForYes: false,
        isThankYouPopupShown: !this.state.isThankYouPopupShown
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
    this.setState({
      isThankYouPopupShown: false
    });
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
      yesLink = 
      <span className="footer-answer">
        <a href="" title="Yes" style={{ pointerEvents: 'none' }} onClick={(event) => {this.handleHelpfulYesClick(event)}}>yes &#40; {this.state.helpfulYes} &#41;</a>
      </span>;
    } else {
      yesLink = 
      <span className="footer-answer">
        <a href="" title="Yes" onClick={(event) => {this.handleHelpfulYesClick(event)}} >yes &#40; {this.state.helpfulYes} &#41;</a>
      </span>;
    }

    if (clickableLinkForNo === false) {
      noLink = 
      <span className="footer-answer">
        <a href="" title="No" style={{ pointerEvents: 'none' }} onClick={(event) => {this.handleHelpfulNoClick(event)}  }>no &#40; {this.state.helpfulNo} &#41;</a>
      </span>;
    } else {
      noLink = 
      <span className="footer-answer">
        <a href="" title="No" onClick={(event) => {this.handleHelpfulNoClick(event)}}>no &#40; {this.state.helpfulNo} &#41;</a>
      </span>;
    }

    const isReportPopupShown = this.state.isReportPopupShown;
    let reportPopup;

    if (isReportPopupShown) {
      reportPopup =             
      <div className="report-popup">
        <span>describe the issue</span>
        <form>
          <div className="report-form">
            <textarea type="text"></textarea>
          </div>
          <div className="report-form-btns">
            <input className="submit-btn" type="submit" value="Submit" 
            onClick={(event) => {this.handleReportButtonClick(event)}} />
            <input className="cancel-btn" type="submit" value="Cancel" 
            onClick={(event) => {this.handleReportButtonClick(event)}} />
          </div>
        </form>
      </div>;
    } else {
      reportPopup = '';
    }

    const isThankYouPopupShown = this.state.isThankYouPopupShown;
    let thankYouPopup;

    if (isThankYouPopupShown === true) {
      thankYouPopup = 
      <div id="thank-you-popup">
        <span id="popup-text">Thank you! You have successfully submitted feedback for this review.</span>
        <a href="" title="Close" id="popup-close-button" onClick={(event) => {this.handleHelpfulCloseClick(event)}}>&#x2715;</a>
      </div>;
    } else {
      thankYouPopup = '';
    }

    const isUserPopupShown = this.state.isUserPopupShown;
    let userPopup;

    if (isUserPopupShown === true) {
      userPopup = 
      <div className="user-popup" onMouseLeave={(event) => {this.handleUsernameLeave(event)}}>
        <div id="popup-username">
          <a href="#/" className="username" title={`See ${this.props.review.username}'s full profile`}>{this.props.review.username}</a>
        </div>
        <div id="popup-active-date">
          Active since: {this.props.review.activeSinceDate}
        </div>
        <div id="also-reviewed-text">
          I also reviewed
        </div>
        <div id="first-rating">
          <span><a href="#/" title="Scuba Pullover">Scuba Pullover</a></span>
          <span><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${this.props.review.rating}_0/5/rating.gif`} alt={`${this.props.review.rating} out of 5`} title={`${this.props.review.rating} out of 5`}/></span>
        </div>
        <div id="rating-container">
          <div id="second-rating">
            <span id="text">&#40;Unknown&#41;</span>
            <span><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/3_0/5/rating.gif`} alt={`3 out of 5`} title={`3 out of 5`}/></span>
          </div>
        </div>
        <div id="helpfulness-votes">
          <span id="helpfulness-text">Helpfulness Votes</span>
          <span><img src={'https://i.imgur.com/GsRixgl.png'}/></span>
          <span className="helpfulness-number">{this.props.review.helpfulnessVotesThumbsUp}</span>
          <span><img src={'https://i.imgur.com/fWCf4UL.png'}/></span>
          <span className="helpfulness-number">{this.props.review.helpfulnessVotesThumbsDown}</span>
        </div>
        <div id="full-profile-link">
          <span><a href="#/" title={`See ${this.props.review.username}'s full profile`}>See full profile</a></span>
        </div>
      </div>;
    } else {
      userPopup = '';
    }

    return (
      <div className="container">
        <div className="review-profile">
          <div className="rating"><img src={`https://lululemon.ugc.bazaarvoice.com/7834redes/${this.props.review.rating}_0/5/rating.gif`} alt={`${this.props.review.rating} out of 5`} title={`${this.props.review.rating} out of 5`}/></div>
          <a href="#/" className="username" onMouseEnter={(event) => {this.handleUsernameEnter(event)}}>{this.props.review.username}</a>
          <ReactCSSTransitionGroup
            transitionName="popup"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {userPopup}
          </ReactCSSTransitionGroup>
          <div className="user-properties">
            <div className="user-property">
              <span className="lighter">location: </span>
              <span className="bolder">{this.props.review.location.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">athletic type: </span>
              <span className="bolder">{this.props.review.athleticType.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">age: </span>
              <span className="bolder">{this.props.review.ageRange.toUpperCase()}</span>
            </div>
            <div className="user-property">
              <span className="lighter">body type: </span>
              <span className="bolder">{this.props.review.bodyType.toUpperCase()}</span>
            </div>
          </div>
          <div className="profile-property">
            <div className="bolder">what you like</div>
            <div className="lighter">{this.props.review.whatYouLike}</div>
          </div>
          <div className="profile-property">
            <div className="bolder">what you don't like</div>
            <div className="lighter">{this.props.review.whatYouDidntLike}</div>
          </div>
        </div>
        <div className="review-content">
          <div className="review-date">{this.props.review.reviewDate.toUpperCase()}</div>
          <div className="review-title">{this.props.review.reviewTitle}</div>
          <div className="review-body">{this.props.review.reviewBody}</div>
          <div className="review-footer">
            <span className="footer-question">Was this reivew helpful to you?</span>
            {yesLink}
            {noLink}
            <span className="footer-report"><a href="" title="Report" onClick={(event) => {this.handleReportLinkClick(event)}}>report as inappropriate</a></span>
            <ReactCSSTransitionGroup
              transitionName="popup"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {reportPopup}
            </ReactCSSTransitionGroup>
          </div>
            <ReactCSSTransitionGroup
              transitionName="popup"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {thankYouPopup}
            </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default ReviewContent;