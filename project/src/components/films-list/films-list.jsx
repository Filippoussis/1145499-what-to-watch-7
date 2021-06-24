import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import withApiService from '../../hooks/withApiService';

import {loadFilms} from '../../actions/films';

import apiProp from '../../props/api';
import filmProp from '../../props/film';

import SmallFilmCard from './small-film-card/small-film-card';

class FilmsList extends Component {
  componentDidMount() {
    const data = this.props.apiService.getFilms();
    this.props.loadFilms(data);
  }

  render() {
    const filmsItems = this.props.filtredFilms.map((film) => <SmallFilmCard key={film.id} film={film} />);
    return (
      <div className="catalog__films-list">
        {filmsItems}
      </div>
    );
  }
}

FilmsList.propTypes = {
  filtredFilms: PropTypes.arrayOf(filmProp),
  apiService: apiProp,
  loadFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({films, currentGenre, defaultGenre}) => ({
  filtredFilms: currentGenre !== defaultGenre ? films.filter((film) => film.genre === currentGenre) : films,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: (films) => dispatch(loadFilms(films)),
});

export default compose(withApiService, connect(mapStateToProps, mapDispatchToProps))(FilmsList);
