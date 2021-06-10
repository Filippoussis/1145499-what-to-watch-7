import React from 'react';
import PropTypes from 'prop-types';

function ShowMore({incDisplayedFilmsCount}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={incDisplayedFilmsCount}>Show more</button>
    </div>
  );
}

ShowMore.propTypes = {
  incDisplayedFilmsCount: PropTypes.func.isRequired,
};

export default ShowMore;
