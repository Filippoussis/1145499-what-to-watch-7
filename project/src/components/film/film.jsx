import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {fetchFilm} from '../../store/actions/api-actions';

import filmProp, {filmDefault} from '../../props/film';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import FilmCardDesc from './film-card-desc/film-card-desc';
import Similar from './similar/similar';
import PageFooter from '../page-footer/page-footer';
import Spinner from '../spinner/spinner';

class Film extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchFilm(Number(id));
  }

  render() {

    if (Object.keys(this.props.film).length < 1) {
      return <Spinner />;
    }

    const {id, name, posterImage, backgroundImage, genre, released} = this.props.film;

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

              {Object.keys(this.props.film).length > 1 ? <FilmCardDesc film={this.props.film} /> : null}

            </div>
          </div>
        </section>
        <div className="page-content">
          <Similar filmId={Number(this.props.match.params.id)} />
          <PageFooter />
        </div>
      </>
    );
  }
}

Film.defaultProps = {
  film: filmDefault,
};

Film.propTypes = {
  film: filmProp,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchFilm: PropTypes.func.isRequired,
};

const mapStateToProps = ({film}) => ({
  film,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilm: (id) => dispatch(fetchFilm(id)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Film);
