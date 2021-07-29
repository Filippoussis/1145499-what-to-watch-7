import React from 'react';
import PropTypes from 'prop-types';

import ReviewSubmit from './review-submit/review-submit';

function ReviewText({isDisabledSubmit, isDisabled}) {
  return (
    <div className="add-review__text">
      <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={isDisabled}></textarea>
      <ReviewSubmit isDisabledSubmit={isDisabledSubmit} />
    </div>
  );
}

ReviewText.propTypes = {
  isDisabledSubmit: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ReviewText;
