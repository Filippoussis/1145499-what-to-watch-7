import React from 'react';
import PropTypes from 'prop-types';

function GenresItem(props) {

  const {genre, currentGenre, selectGenre} = props;
  const activeClassMod = genre === currentGenre ? 'catalog__genres-item--active' : '';

  const handleClick = (evt) => selectGenre(evt.target.textContent);

  return (
    <li className={`catalog__genres-item ${activeClassMod}`}>
      <span className="catalog__genres-link" onClick={handleClick}>{genre}</span>
    </li>
  );
}

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  currentGenre: PropTypes.string.isRequired,
  selectGenre: PropTypes.func.isRequired,
};

export default GenresItem;
