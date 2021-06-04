import React from 'react';

import Preview from '../preview/preview';
import GenresList from './genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import ShowMore from './show-more/show-more';
import PageFooter from '../page-footer/page-footer';

const FILM_DATA = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
};

function Main() {
  return (
    <>
      <Preview film={FILM_DATA} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList />
          <ShowMore />
        </section>
        <PageFooter />
      </div>
    </>
  );
}

export default Main;
