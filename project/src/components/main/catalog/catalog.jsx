import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFilms} from '../../../store/actions/api-actions';
import {resetGenre} from '../../../store/actions/actions';
import {getLoadedFilmsStatus} from '../../../store/reducers/films-data/selectors';
import {getDisplayedFilmsCount, getFiltredFilms} from '../../../store/reducers/events/selectors';
import {getIsUnexpectedError} from '../../../store/reducers/error/selectors';

import GenresList from './genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from './show-more-button/show-more-button';
import Spinner from '../../spinner/spinner';
import ErrorMessage from '../../error-message/error-message';

function Catalog() {

  const dispatch = useDispatch();
  const filtredFilms = useSelector(getFiltredFilms);
  const displayedFilmsCount = useSelector(getDisplayedFilmsCount);
  const isLoading = useSelector(getLoadedFilmsStatus);
  const isError = useSelector(getIsUnexpectedError);

  const request = useCallback(() => dispatch(fetchFilms()), [dispatch]);
  useEffect(() => {
    request();
    return () => dispatch(resetGenre());
  }, [request, dispatch]);

  const displayedFilms = filtredFilms.slice(0, displayedFilmsCount);

  if (isError) {
    return <ErrorMessage />;
  }

  if (!isLoading) {
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
