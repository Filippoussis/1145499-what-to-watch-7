import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchFavorites} from '../../../store/actions/api-actions';
import {getFavoritesData, getLoadedFavoritesStatus} from '../../../store/reducers/films-data/selectors';

import FilmsList from '../../films-list/films-list';
import Spinner from '../../spinner/spinner';

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesData);
  const loading = useSelector(getLoadedFavoritesStatus);

  const request = useCallback(() => dispatch(fetchFavorites()), [dispatch]);
  useEffect(() => request(), [request]);

  if (!loading) {
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
