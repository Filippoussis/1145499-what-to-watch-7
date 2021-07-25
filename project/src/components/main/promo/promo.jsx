import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchPromo} from '../../../store/actions/api-actions';
import {getPromoData, getLoadedPromoStatus} from '../../../store/reducers/films-data/selectors';

import Logo from '../../page-header/logo/logo';
import UserBlock from '../../page-header/user-block/user-block';
import FilmCardButtons from '../../film-card-buttons/film-card-buttons';
import Spinner from '../../spinner/spinner';

function Promo() {

  const dispatch = useDispatch();
  const promo = useSelector(getPromoData);
  const loading = useSelector(getLoadedPromoStatus);

  const request = useCallback(() => dispatch(fetchPromo()), [dispatch]);
  useEffect(() => request(), [request]);

  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promo;

  if (!loading) {
    return <Spinner />;
  }

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

            <FilmCardButtons id={id} isFavorite={isFavorite} isPromo />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
