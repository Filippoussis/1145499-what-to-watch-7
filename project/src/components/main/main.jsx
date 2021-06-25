import React from 'react';

import Promo from '../promo/promo';
import GenresList from './genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import PageFooter from '../page-footer/page-footer';

function Main() {
  return (
    <>
      <Promo />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList />
        </section>
        <PageFooter />
      </div>
    </>
  );
}

export default Main;
