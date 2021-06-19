import React from 'react';
import PropTypes from 'prop-types';

import FilmCardNavItem from './film-card-nav-item/film-card-nav-item';

import {FILM_CARD_NAV_ITEMS} from '../../../../const';

function FilmCardNav({activeItem, selectItem}) {

  const items = FILM_CARD_NAV_ITEMS.map((item) => (
    <FilmCardNavItem key={item} label={item} activeItem={activeItem} selectItem={selectItem} />
  ));

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {items}
      </ul>
    </nav>
  );
}

FilmCardNav.propTypes = {
  activeItem: PropTypes.oneOf(FILM_CARD_NAV_ITEMS).isRequired,
  selectItem: PropTypes.func.isRequired,
};

export default FilmCardNav;
