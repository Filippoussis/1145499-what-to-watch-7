import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {sendComment} from '../../../store/actions/api-actions';

import ReviewRating from './review-rating/review-rating';
import ReviewText from './review-text/review-text';

const DEFAULT_RATING = '8';

const ReviewTextLimit = {
  MIN: 50,
  MAX: 400,
};

function ReviewForm(props) {

  const {filmId, onSubmit} = props;

  const [state, setState] = useState({
    'rating': DEFAULT_RATING,
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
    onSubmit(filmId, state);
  };

  const reviewTextLength = state['review-text'].length;
  const isDisabledSubmit = reviewTextLength < ReviewTextLimit.MIN || reviewTextLength > ReviewTextLimit.MAX;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onChange={handleChange} onSubmit={handleSubmit}>
        <ReviewRating currentRating={state.rating} />
        <ReviewText isDisabledSubmit={isDisabledSubmit} />
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  filmId: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (filmId, formData) => dispatch(sendComment(filmId, formData)),
});


export default connect(null, mapDispatchToProps)(ReviewForm);
