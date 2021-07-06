import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../../props/film';

import {fetchFilms} from '../../../store/actions/api-actions';

import GenresList from './genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from './show-more-button/show-more-button';
import Spinner from '../../spinner/spinner';

function Catalog(props) {

  const {filtredFilms, displayedFilmsCount, loading, loadFilms} = props;
  const displayedFilms = filtredFilms.slice(0, displayedFilmsCount);

  const request = useCallback(() => loadFilms(), [loadFilms]);
  useEffect(() => request(), [request]);

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

Catalog.propTypes = {
  loading: PropTypes.bool.isRequired,
  filtredFilms: PropTypes.arrayOf(filmProp),
  displayedFilmsCount: PropTypes.number.isRequired,
  loadFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({films, currentGenre, defaultGenre, displayedFilmsCount}) => ({
  filtredFilms: currentGenre !== defaultGenre ? films.data.filter((film) => film.genre === currentGenre) : films.data,
  displayedFilmsCount,
  loading: films.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
