import React from 'react';
import PropTypes from 'prop-types';

import {STARS_VALUES} from '../../../../../const';

function RatingStar({value}) {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

RatingStar.propTypes = {
  value: PropTypes.oneOf(STARS_VALUES).isRequired,
};

export default RatingStar;
