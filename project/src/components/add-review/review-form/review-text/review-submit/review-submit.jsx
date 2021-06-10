import React from 'react';
import PropTypes from 'prop-types';

function ReviewSubmit({isDisabledSubmit}) {
  return (
    <div className="add-review__submit">
      <button className="add-review__btn" type="submit" disabled={isDisabledSubmit}>Post</button>
    </div>
  );
}

ReviewSubmit.propTypes = {
  isDisabledSubmit: PropTypes.bool.isRequired,
};

export default ReviewSubmit;
