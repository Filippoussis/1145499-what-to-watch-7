import React from 'react';
import RatingStar from './rating-star/rating-star';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../const';

function ReviewRating({currentRating, isDisabled}) {

  const ratingStars = STARS_VALUES.map((starValue) => (
    <RatingStar key={starValue} starValue={starValue} currentRating={currentRating} isDisabled={isDisabled} />
  ));

  return (
    <div className="rating">
      <div className="rating__stars">
        {ratingStars}
      </div>
    </div>
  );
}

ReviewRating.propTypes = {
  currentRating: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
};

export default ReviewRating;
