import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import commentProp from '../../../../props/comment';

import {getComments} from '../../../../store/reducers/films-data/selectors';

import ReviewsCol from './reviews-col/reviews-col';
import getCommentsColCount from '../../../../utils/comments-col-count';

function FilmCardReviews(props) {

  const {comments} = props;
  const {left, right} = getCommentsColCount(comments.length);

  const leftColComments = left > 0 ? comments.slice(0, left) : [];
  const rightColComments = right > 0 ? comments.slice(left) : [];

  const leftCol = leftColComments.length > 0 ? <ReviewsCol comments={leftColComments} /> : null;
  const rightCol = rightColComments.length > 0 ? <ReviewsCol comments={rightColComments} /> : null;

  return (
    <div className="film-card__reviews film-card__row">
      {leftCol}
      {rightCol}
    </div>
  );
}

FilmCardReviews.propTypes = {
  comments: PropTypes.arrayOf(commentProp),
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

export default connect(mapStateToProps, null)(FilmCardReviews);
