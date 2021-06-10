import React, { Component } from 'react';

import ReviewRating from './review-rating/review-rating';
import ReviewText from './review-text/review-text';

const DEFAULT_RATING = '8';

const ReviewTextLimit = {
  MIN: 50,
  MAX: 400,
};

export default class ReviewForm extends Component {
  constructor() {
    super();

    this.state = {
      'rating': DEFAULT_RATING,
      'review-text': '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {

    const reviewTextLength = this.state['review-text'].length;
    const isDisabledSubmit = reviewTextLength < ReviewTextLimit.MIN || reviewTextLength > ReviewTextLimit.MAX;

    return (
      <div className="add-review">
        <form action="#" className="add-review__form" onChange={this.handleChange}>
          <ReviewRating currentRating={this.state.rating} />
          <ReviewText isDisabledSubmit={isDisabledSubmit} />
        </form>
      </div>
    );
  }
}
