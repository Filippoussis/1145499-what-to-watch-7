import React from 'react';
import commentProp from '../../../../../props/comment';

import dayjs from 'dayjs';

function Review({review}) {

  const {comment, user, date, rating} = review;

  const convertedDate = new Date(date);
  const humanizedDate = dayjs(convertedDate).format('MMMM DD, YYYY');
  const machineDate = dayjs(convertedDate).format('YYYY-MM-DD');
  const formattedRating = rating.toFixed(1).replace('.', ',');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={machineDate}>{humanizedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formattedRating}</div>
    </div>
  );
}

Review.propTypes = {
  review: commentProp,
};

export default Review;
