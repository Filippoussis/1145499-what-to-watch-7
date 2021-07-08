import React from 'react';
import {connect} from 'react-redux';
import filmProp from '../../props/film';

import Logo from '../page-header/logo/logo';
import Breadcrumbs from '../page-header/breadcrumbs/breadcrumbs';
import UserBlock from '../page-header/user-block/user-block';
import ReviewForm from './review-form/review-form';

function AddReview(props) {

  const {id, name, posterImage, backgroundImage} = props.film;

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

      <ReviewForm filmId={id} />

    </section>
  );
}

AddReview.propTypes = {
  film: filmProp,
};

const mapStateToProps = ({film}) => ({
  film: film.data,
});

export default connect(mapStateToProps, null)(AddReview);
