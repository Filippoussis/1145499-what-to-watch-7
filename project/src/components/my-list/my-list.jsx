import React from 'react';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import Favorites from './favorites/favorites';
import PageFooter from '../page-footer/page-footer';

function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <Favorites />
      <PageFooter />
    </div>
  );
}

export default MyList;
