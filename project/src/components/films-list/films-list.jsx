import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../props/film';

import SmallFilmCard from './small-film-card/small-film-card';

function FilmsList(props) {

  const filmsItems = props.films.map((film) => <SmallFilmCard key={film.id} film={film} />);

  return (
    <div className="catalog__films-list">
      {filmsItems}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default FilmsList;
