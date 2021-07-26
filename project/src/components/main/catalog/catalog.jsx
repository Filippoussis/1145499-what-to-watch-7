import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilms} from '../../../store/actions/api-actions';
import {resetGenre} from '../../../store/actions/actions';
import {getLoadedFilmsStatus} from '../../../store/reducers/films-data/selectors';
import {getDisplayedFilmsCount, getFiltredFilms} from '../../../store/reducers/events/selectors';

import GenresList from './genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from './show-more-button/show-more-button';
import Spinner from '../../spinner/spinner';

function Catalog() {

  const dispatch = useDispatch();
  const filtredFilms = useSelector(getFiltredFilms);
  const displayedFilmsCount = useSelector(getDisplayedFilmsCount);
  const loading = useSelector(getLoadedFilmsStatus);

  const request = useCallback(() => dispatch(fetchFilms()), [dispatch]);
  useEffect(() => {
    request();
    return () => dispatch(resetGenre());
  }, [request, dispatch]);

  const displayedFilms = filtredFilms.slice(0, displayedFilmsCount);

  if (!loading) {
    return <Spinner />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList films={displayedFilms} />
      {displayedFilmsCount < filtredFilms.length ? <ShowMoreButton /> : null}
    </section>
  );
}

export default Catalog;
