import React from 'react';
import PropTypes from 'prop-types';

import Promo from '../promo/promo';
import GenresList from './genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import ShowMore from './show-more/show-more';
import PageFooter from '../page-footer/page-footer';

import getGenres from '../../utils';
import filmProp from '../../props/film';

function Main({films}) {

  const filmPromo = films[0];
  const genres = getGenres(films);

  return (
    <>
      <Promo filmPromo={filmPromo} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={genres} />
          <FilmsList />
          <ShowMore />
        </section>
        <PageFooter />
      </div>
    </>
  );
}

Main.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default Main;
