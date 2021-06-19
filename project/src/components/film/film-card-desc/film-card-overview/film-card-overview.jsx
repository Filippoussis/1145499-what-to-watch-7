import React from 'react';
import filmProp from '../../../../props/film';

import {getRatingTitle} from '../../../../utils/rating';

function FilmCardOverview({film}) {

  const {rating, scoresCount, description, director, starring} = film;

  const ratingTitle = getRatingTitle(rating);
  const formattedRating = rating.toFixed(1).replace('.', ',');
  const formattedStars = starring.join(', ');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{formattedRating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingTitle}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {formattedStars} and other</strong></p>
      </div>
    </>
  );
}

FilmCardOverview.propTypes = {
  film: filmProp,
};

export default FilmCardOverview;
