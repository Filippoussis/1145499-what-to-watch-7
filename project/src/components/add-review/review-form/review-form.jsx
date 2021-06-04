import React from 'react';

import ReviewRating from './review-rating/review-rating';
import ReviewText from './review-text/review-text';

function ReviewForm() {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <ReviewRating />
        <ReviewText />
      </form>
    </div>
  );
}

export default ReviewForm;
