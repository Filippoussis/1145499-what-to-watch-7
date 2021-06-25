import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import withApiService from '../../hooks/withApiService';
import {loadPromo} from '../../store/actions/films';

import apiProp from '../../props/api';
import filmProp from '../../props/film';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';

class Promo extends Component {
  componentDidMount() {
    const data = this.props.apiService.getPromo();
    this.props.loadPromo(data);
  }

  render() {
    const {id, name, posterImage, backgroundImage, genre, released} = this.props.promo;

    return (
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => this.props.history.push(`/player/${id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg className="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Promo.propTypes = {
  promo: filmProp,
  apiService: apiProp,
  history: PropTypes.object.isRequired,
  loadPromo: PropTypes.func.isRequired,
};

const mapStateToProps = ({promo}) => ({
  promo,
});

const mapDispatchToProps = (dispatch) => ({
  loadPromo: (film) => dispatch(loadPromo(film)),
});

export default compose(withApiService, connect(mapStateToProps, mapDispatchToProps), withRouter)(Promo);
