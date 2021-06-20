import React from 'react';
import PropTypes from 'prop-types';
import commentProp from '../../../../../props/comment';

import Review from '../review/review';

function ReviewsCol({comments}) {

  const items = comments.map((item) => <Review key={item.id} review={item} />);

  return (
    <div className="film-card__reviews-col">
      {items}
    </div>
  );
}

ReviewsCol.propTypes = {
  comments: PropTypes.arrayOf(commentProp),
};

export default ReviewsCol;
