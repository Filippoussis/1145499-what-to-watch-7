import React from 'react';
import RatingStar from './rating-star/rating-star';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../const';

function ReviewRating(props) {

  const ratingStars = STARS_VALUES.map((starValue) => (
    <RatingStar key={starValue} starValue={starValue} defaultRating={props.defaultRating} />
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
  defaultRating: PropTypes.oneOf(STARS_VALUES).isRequired,
};

export default ReviewRating;
