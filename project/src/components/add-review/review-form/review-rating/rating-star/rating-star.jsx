import React from 'react';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../../const';

function RatingStar({starValue, defaultRating}) {

  const defaultChecked = starValue === defaultRating;

  return (
    <>
      <input className="rating__input" id={`star-${starValue}`} type="radio" name="rating" value={starValue} defaultChecked={defaultChecked} />
      <label className="rating__label" htmlFor={`star-${starValue}`}>Rating {starValue}</label>
    </>
  );
}

RatingStar.propTypes = {
  starValue: PropTypes.oneOf(STARS_VALUES).isRequired,
  defaultRating: PropTypes.oneOf(STARS_VALUES).isRequired,
};

export default RatingStar;
