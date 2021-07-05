import React, { Component } from 'react';
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

class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      'rating': DEFAULT_RATING,
      'review-text': '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.props.filmId, this.state);
  }

  render() {

    const reviewTextLength = this.state['review-text'].length;
    const isDisabledSubmit = reviewTextLength < ReviewTextLimit.MIN || reviewTextLength > ReviewTextLimit.MAX;

    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <ReviewRating currentRating={this.state.rating} />
          <ReviewText isDisabledSubmit={isDisabledSubmit} />
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  filmId: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (filmId, formData) => dispatch(sendComment(filmId, formData)),
});


export default connect(null, mapDispatchToProps)(ReviewForm);
