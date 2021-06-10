import React from 'react';

import Logo from '../page-header/logo/logo';
import Breadcrumbs from '../page-header/breadcrumbs/breadcrumbs';
import UserBlock from '../page-header/user-block/user-block';
import ReviewForm from './review-form/review-form';

import filmProp from '../../props/film';


function AddReview({selectedFilm}) {

  const {name, posterImage,backgroundImage} = selectedFilm;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs name={name} />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

AddReview.propTypes = {
  selectedFilm: filmProp,
};

export default AddReview;
