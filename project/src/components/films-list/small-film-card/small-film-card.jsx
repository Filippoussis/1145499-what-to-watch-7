import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function SmallFilmCard({id, name, previewImage, activateCard}) {

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => activateCard(id)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  activateCard: PropTypes.func.isRequired,
};

export default SmallFilmCard;
