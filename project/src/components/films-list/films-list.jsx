import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from './small-film-card/small-film-card';

import filmProp from '../../props/film';

function FilmsList({films}) {

  const filmsItems = films.map(({id, name, previewImage, previewVideoLink}) =>
    <SmallFilmCard key={id} id={id} name={name} previewImage={previewImage} previewVideoLink={previewVideoLink} />,
  );

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
