import React from 'react';
import PropTypes from 'prop-types';

import {FILM_CARD_NAV_ITEMS} from '../../../../../const';

function FilmCardNavItem({label, activeItem, selectItem}) {

  const classModActive = label === activeItem ? 'film-nav__item--active' : '';

  return (
    <li className={`film-nav__item ${classModActive}`} onClick={() => selectItem(label)} >
      <span className="film-nav__link">{label}</span>
    </li>
  );
}

FilmCardNavItem.propTypes = {
  label: PropTypes.oneOf(FILM_CARD_NAV_ITEMS).isRequired,
  activeItem: PropTypes.oneOf(FILM_CARD_NAV_ITEMS).isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default FilmCardNavItem;
