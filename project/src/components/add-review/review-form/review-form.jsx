import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {getIsUnexpectedError} from '../../../store/reducers/error/selectors';
import {fetchComment} from '../../../store/actions/api-actions';

import ReviewRating from './review-rating/review-rating';
import ReviewText from './review-text/review-text';
import ErrorMessage from '../../error-message/error-message';

const ReviewTextLimit = {
  MIN: 50,
  MAX: 400,
};

function ReviewForm(props) {
  const dispatch = useDispatch();
  const isError = useSelector(getIsUnexpectedError);

  const {filmId} = props;

  const [state, setState] = useState({
    'rating': '',
    'review-text': '',
  });

  const handleChange = (evt) => {
    const target = evt.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(fetchComment(filmId, state));
  };

  const reviewRating = state.rating;
  const reviewTextLength = state['review-text'].length;
  const isDisabledSubmit = reviewTextLength < ReviewTextLimit.MIN || reviewTextLength > ReviewTextLimit.MAX || reviewRating === '';

  return (
    <div className="add-review">
      {isError ? <ErrorMessage /> : null}
      <form action="#" className="add-review__form" onChange={handleChange} onSubmit={handleSubmit}>
        <ReviewRating currentRating={reviewRating} />
        <ReviewText isDisabledSubmit={isDisabledSubmit} />
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  filmId: PropTypes.number,
};

export default ReviewForm;
