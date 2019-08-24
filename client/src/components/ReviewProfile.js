import React from 'react';

const ReviewProfile = (props) => (
  <div className="review-profile">
    <img src="https://lululemon.ugc.bazaarvoice.com/7834redes/5_0/5/rating.gif" alt="5 out of 5" title="5 out of 5"/>
    <div className="username">username</div>
    {/* TODO: MAKE POPUP WHEN HOVERED OVER */}
    <div className="user-properties">
      <div className="user-property"><span className="lighter">location: </span><span className="bolder">los angeles, ca</span></div>
      <div className="user-property"><span className="lighter">athletic type: </span><span className="bolder">yogi</span></div>
      <div className="user-property"><span className="lighter">age: </span><span className="bolder">35-44</span></div>
      <div className="user-property"><span className="lighter">body type: </span><span className="bolder">athletic</span></div>
    </div>
    <div className="profile-property"><div className="bolder">what you like</div><div className="lighter">material quality</div></div>
    <div className="profile-property"><div className="bolder">what you don't like</div><div className="lighter">color not as pictured</div></div>
  </div>
);

export default ReviewProfile;