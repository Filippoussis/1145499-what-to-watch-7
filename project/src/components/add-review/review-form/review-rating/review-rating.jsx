import React from 'react';
import RatingStar from './rating-star/rating-star';

import {STARS_VALUES} from '../../../../const';

function ReviewRating() {

  const ratingStars = STARS_VALUES.map((value) => <RatingStar key={value} value={value} />);

  return (
    <div className="rating">
      <div className="rating__stars">
        {ratingStars}
      </div>
    </div>
  );
}

export default ReviewRating;
