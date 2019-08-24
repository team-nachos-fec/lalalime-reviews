import React from 'react';

const ReviewProfile = (props) => (
  <div className="review-profile">
    <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/5_0/5/rating.gif" alt="5 out of 5" title="5 out of 5"/>
    <div>username</div>
    {/* TODO: MAKE POPUP WHEN HOVERED OVER */}
    <div>athletic type</div>
    <div>body type</div>
    <div>what you like</div>
    <div>what you don't like</div>
  </div>
);

export default ReviewProfile;