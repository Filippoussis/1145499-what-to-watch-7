import React from 'react';

import Logo from '../page-header/logo/logo';
import Breadcrumbs from '../page-header/breadcrumbs/breadcrumbs';
import UserBlock from '../page-header/user-block/user-block';
import ReviewForm from './review-form/review-form';

function AddReview() {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReview;
