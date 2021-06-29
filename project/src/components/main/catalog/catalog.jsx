import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import filmProp from '../../../props/film';

import {fetchFilms} from '../../../store/actions/api-actions';

import GenresList from './genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from './show-more-button/show-more-button';
import Spinner from '../../spinner/spinner';

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchFilms();
  }

  render() {

    if (Object.keys(this.props.filtredFilms).length < 1) {
      return <Spinner />;
    }

    const {filtredFilms, displayedFilmsCount} = this.props;
    const displayedFilms = filtredFilms.slice(0, displayedFilmsCount);

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmsList films={displayedFilms} />
        {displayedFilmsCount < filtredFilms.length ? <ShowMoreButton /> : null}
      </section>
    );
  }
}

Catalog.propTypes = {
  filtredFilms: PropTypes.arrayOf(filmProp),
  displayedFilmsCount: PropTypes.number.isRequired,
  fetchFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({films, currentGenre, defaultGenre, displayedFilmsCount}) => ({
  filtredFilms: currentGenre !== defaultGenre ? films.filter((film) => film.genre === currentGenre) : films,
  displayedFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
