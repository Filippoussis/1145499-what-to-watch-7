import React, {useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilm, fetchSimilar, fetchComments} from '../../store/actions/api-actions';
import {getFilmData, getLoadedFilmStatus} from '../../store/reducers/films-data/selectors';

import Logo from '../page-header/logo/logo';
import UserBlock from '../page-header/user-block/user-block';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCardDesc from './film-card-desc/film-card-desc';
import Similar from './similar/similar';
import PageFooter from '../page-footer/page-footer';
import Spinner from '../spinner/spinner';

function Film() {

  const dispatch = useDispatch();

  const params = useParams();
  const {id: matchId} = params;

  const request = useCallback(() => {
    dispatch(fetchFilm(matchId));
    dispatch(fetchSimilar(matchId));
    dispatch(fetchComments(matchId));
  }, [dispatch, matchId]);
  useEffect(() => request(), [request]);

  const film = useSelector(getFilmData);
  const loading = useSelector(getLoadedFilmStatus);

  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = film;

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

              <FilmCardButtons id={id} isFavorite={isFavorite} isPromo={false} />

            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <FilmCardDesc film={film} />

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

export default Film;
