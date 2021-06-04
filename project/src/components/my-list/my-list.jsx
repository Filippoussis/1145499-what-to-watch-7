import React from 'react';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import FilmsList from '../films-list/films-list';
import PageFooter from '../page-footer/page-footer';

function UserPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>

      <PageFooter />
    </div>
  );
}

export default UserPage;
