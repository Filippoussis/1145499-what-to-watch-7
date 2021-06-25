import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';

import withApiService from '../../hooks/withApiService';

import {loadFilms} from '../../store/actions/films';

import apiProp from '../../props/api';
import filmProp from '../../props/film';

import SmallFilmCard from './small-film-card/small-film-card';
import ShowMoreButton from './show-more-button/show-more-button';

class FilmsList extends Component {
  componentDidMount() {
    const data = this.props.apiService.getFilms();
    this.props.loadFilms(data);
  }

  render() {

    const {filtredFilms, displayedFilmsCount} = this.props;

    const filmsItems = filtredFilms.map((film) => <SmallFilmCard key={film.id} film={film} />);
    const displayedFilms =  filmsItems.slice(0, displayedFilmsCount);

    return (
      <>
        <div className="catalog__films-list">
          {displayedFilms}
        </div>
        {displayedFilmsCount < filmsItems.length ? <ShowMoreButton /> : null}
      </>
    );
  }
}

FilmsList.propTypes = {
  filtredFilms: PropTypes.arrayOf(filmProp),
  displayedFilmsCount: PropTypes.number.isRequired,
  apiService: apiProp,
  loadFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({films, currentGenre, defaultGenre, displayedFilmsCount}) => ({
  filtredFilms: currentGenre !== defaultGenre ? films.filter((film) => film.genre === currentGenre) : films,
  displayedFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms: (films) => dispatch(loadFilms(films)),
});

export default compose(withApiService, connect(mapStateToProps, mapDispatchToProps))(FilmsList);
