import React from 'react';

import PageHeader from '../page-header/page-header';
import FilmsList from '../films-list/films-list';
import PageFooter from '../page-footer/page-footer';

function UserPage() {
  return (
    <div className="user-page">
      <PageHeader />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>

      <PageFooter />
    </div>
  );
}

export default UserPage;
