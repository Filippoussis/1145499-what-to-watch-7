import React from 'react';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../../const';

function RatingStar({starValue, currentRating, isDisabled}) {

  const isChecked = starValue === currentRating;

  return (
    <>
      <input className="rating__input" id={`star-${starValue}`} type="radio" name="rating" value={starValue} defaultChecked={isChecked} disabled={isDisabled}/>
      <label className="rating__label" htmlFor={`star-${starValue}`}>Rating {starValue}</label>
    </>
  );
}

RatingStar.propTypes = {
  starValue: PropTypes.oneOf(STARS_VALUES).isRequired,
  currentRating: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
};

export default RatingStar;
