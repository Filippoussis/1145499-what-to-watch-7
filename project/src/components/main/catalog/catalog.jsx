import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../../props/film';

import {fetchFilms} from '../../../store/actions/api-actions';

import GenresList from './genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from './show-more-button/show-more-button';
import Spinner from '../../spinner/spinner';

import getGenres from '../../../utils/genres';

function Catalog(props) {

  const {filtredFilms, genres, displayedFilmsCount, loading, loadFilms} = props;
  const displayedFilms = filtredFilms.slice(0, displayedFilmsCount);

  const request = useCallback(() => loadFilms(), [loadFilms]);
  useEffect(() => request(), [request]);

  if (!loading) {
    return <Spinner />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList genres={genres} />
      <FilmsList films={displayedFilms} />
      {displayedFilmsCount < filtredFilms.length ? <ShowMoreButton /> : null}
    </section>
  );
}

Catalog.propTypes = {
  filtredFilms: PropTypes.arrayOf(filmProp),
  genres: PropTypes.array.isRequired,
  displayedFilmsCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, EVENT}) => ({
  filtredFilms: EVENT.currentGenre !== EVENT.defaultGenre ? DATA.films.data.filter((film) => film.genre === EVENT.currentGenre) : DATA.films.data,
  genres: getGenres(DATA.films.data),
  displayedFilmsCount: EVENT.displayedFilmsCount,
  loading: DATA.films.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
