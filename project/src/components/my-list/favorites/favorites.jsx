import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFavorites} from '../../../store/actions/api-actions';
import {getFavoritesData, getLoadedFavoritesStatus} from '../../../store/reducers/films-data/selectors';
import {getIsUnexpectedError} from '../../../store/reducers/error/selectors';

import FilmsList from '../../films-list/films-list';
import Spinner from '../../spinner/spinner';
import ErrorMessage from '../../error-message/error-message';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesData);
  const isLoading = useSelector(getLoadedFavoritesStatus);
  const isError = useSelector(getIsUnexpectedError);

  const request = useCallback(() => dispatch(fetchFavorites()), [dispatch]);
  useEffect(() => request(), [request]);

  if (isError) {
    return <ErrorMessage />;
  }

  if (!isLoading) {
    return <Spinner />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmsList films={favorites} />
    </section>
  );
}

export default Favorites;
