import React from 'react';
import ReviewsCol from './reviews-col/reviews-col';

import COMMENTS_DATA from '../../../../mocks/comments';
import getCommentsColCount from '../../../../utils/comments-col-count';

function FilmCardReviews() {

  const commentsCount = COMMENTS_DATA.length;
  const {left, right} = getCommentsColCount(commentsCount);

  const leftColComments = left > 0 ? COMMENTS_DATA.slice(0, left) : [];
  const rightColComments = right > 0 ? COMMENTS_DATA.slice(left) : [];

  const leftCol = leftColComments.length > 0 ? <ReviewsCol comments={leftColComments} /> : null;
  const rightCol = rightColComments.length > 0 ? <ReviewsCol comments={rightColComments} /> : null;

  return (
    <div className="film-card__reviews film-card__row">
      {leftCol}
      {rightCol}
    </div>
  );
}

export default FilmCardReviews;
