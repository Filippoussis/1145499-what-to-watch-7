import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp, {filmDefault} from '../../props/film';

import {ActionCreator} from '../../store/actions/actions';

import Logo from '../page-header/logo/logo';
import Breadcrumbs from '../page-header/breadcrumbs/breadcrumbs';
import UserBlock from '../page-header/user-block/user-block';
import ReviewForm from './review-form/review-form';

function AddReview(props) {

  const {active, getActiveFilm} = props;
  const {id, name, posterImage, backgroundImage} = active;

  const params = useParams();
  const {id: matchId} = params;

  useEffect(() => getActiveFilm(Number(matchId)));

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

AddReview.defaultProps = {
  active: filmDefault,
};

AddReview.propTypes = {
  active: filmProp,
  getActiveFilm: PropTypes.func.isRequired,
};

const mapStateToProps = ({active}) => ({
  active,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm: (id) => dispatch(ActionCreator.getActiveFilm(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
