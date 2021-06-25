import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import withApiService from '../../hooks/withApiService';
import {loadSelectedFilm} from '../../store/actions/films';

import apiProp from '../../props/api';
import filmProp from '../../props/film';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import FilmCardDesc from './film-card-desc/film-card-desc';
import PageFooter from '../page-footer/page-footer';

class Film extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    const data = this.props.apiService.getFilm(Number(id));
    this.props.loadSelectedFilm(data);
  }

  render() {

    const {id, name, posterImage, backgroundImage, genre, released} = this.props.selectedFilm;

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <Logo />
              <UserBlock />
            </header>

            <div className="film-card__wrap">
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
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
              </div>

              {Object.keys(this.props.selectedFilm).length > 0 ? <FilmCardDesc film={this.props.selectedFilm} /> : null}

            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
          </section>
          <PageFooter />
        </div>
      </>
    );
  }
}

Film.propTypes = {
  selectedFilm: filmProp,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadSelectedFilm: PropTypes.func.isRequired,
  apiService: apiProp,
};

const mapStateToProps = ({selectedFilm}) => ({
  selectedFilm,
});

const mapDispatchToProps = (dispatch) => ({
  loadSelectedFilm: (film) => dispatch(loadSelectedFilm(film)),
});

export default compose(withApiService, connect(mapStateToProps, mapDispatchToProps), withRouter)(Film);
