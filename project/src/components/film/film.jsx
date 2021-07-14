import React, {useEffect, useCallback} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchFilm, fetchSimilar, fetchComments, addFilmFavorite} from '../../store/actions/api-actions';
import {getFilmData, getLoadedFilmStatus} from '../../store/reducers/films-data/selectors';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors';

import filmProp, {filmDefault} from '../../props/film';
import {AuthorizationStatus} from '../../const';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import FilmCardDesc from './film-card-desc/film-card-desc';
import Similar from './similar/similar';
import PageFooter from '../page-footer/page-footer';
import Spinner from '../spinner/spinner';

function Film(props) {

  const {film, loading, loadFilm, loadSimilar, loadComments, authorizationStatus, setFavorite} = props;
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = film;

  const params = useParams();
  const {id: matchId} = params;

  const history = useHistory();
  const redirect = () => history.push(`/player/${id}`);

  const handleClickButtonList = () => {
    setFavorite(id, Number(!isFavorite));
  };

  const request = useCallback(() => {
    loadFilm(matchId);
    loadSimilar(matchId);
    loadComments(matchId);
  }, [loadFilm, loadSimilar, loadComments, matchId]);
  useEffect(() => request(), [request]);

  if (!loading) {
    return <Spinner />;
  }

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
                <button className="btn btn--play film-card__button" type="button" onClick={redirect}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleClickButtonList}>
                  {!isFavorite ? (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  )}
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            {loading ? <FilmCardDesc film={props.film} /> : null}

          </div>
        </div>
      </section>
      <div className="page-content">
        <Similar />
        <PageFooter />
      </div>
    </>
  );
}

Film.defaultProps = {
  film: filmDefault,
};

Film.propTypes = {
  film: filmProp,
  loading: PropTypes.bool.isRequired,
  loadFilm: PropTypes.func.isRequired,
  loadSimilar: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilmData(state),
  loading: getLoadedFilmStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm: (filmId) => dispatch(fetchFilm(filmId)),
  loadSimilar: (filmId) => dispatch(fetchSimilar(filmId)),
  loadComments: (filmId) => dispatch(fetchComments(filmId)),
  setFavorite: (filmId, status) => dispatch(addFilmFavorite(filmId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);
