import React from 'react';
import ReviewContent from './ReviewContent';

const Reviews = (props) => (
  <div>
    {
      props.reviews.map((review, i) => (
        <ReviewContent review={review} key={i} index={i} />
      ))
    }
  </div>
);

export default Reviews;