import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function SmallFilmCard({title, image}) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to="#" className="small-film-card__link" href="film-page.html">{title}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SmallFilmCard;
