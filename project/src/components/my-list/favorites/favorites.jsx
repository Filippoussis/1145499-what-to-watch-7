import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../../props/film';

import {fetchFavorites} from '../../../store/actions/api-actions';

import FilmsList from '../../films-list/films-list';
import Spinner from '../../spinner/spinner';

function Favorites(props) {

  const {favorites, loading, loadFavorites} = props;

  const request = useCallback(() => loadFavorites(), [loadFavorites]);
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

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(filmProp),
  loading: PropTypes.bool.isRequired,
  loadFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = ({favorites}) => ({
  favorites: favorites.data,
  loading: favorites.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(fetchFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
