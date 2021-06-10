import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Promo from '../promo/promo';
import GenresList from './genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import ShowMore from './show-more/show-more';
import PageFooter from '../page-footer/page-footer';

import getGenres from '../../utils';
import filmProp from '../../props/film';

const FILMS_COUNT_STEP = 8;

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      displayedFilmsCount: FILMS_COUNT_STEP,
    };

    this.handleShowMoreButtonClick = this.handleShowMoreButtonClick.bind(this);
  }

  handleShowMoreButtonClick() {
    this.setState((state) => ({
      displayedFilmsCount: state.displayedFilmsCount + FILMS_COUNT_STEP,
    }));
  }

  render() {

    const {films, filmPromo} = this.props;
    const genres = getGenres(films);

    const {displayedFilmsCount} = this.state;
    const filmsDisplayed = films.slice(0, Math.min(films.length, displayedFilmsCount));

    return (
      <>
        <Promo filmPromo={filmPromo} />
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres={genres} />
            <FilmsList films={filmsDisplayed} />
            {displayedFilmsCount < films.length && <ShowMore incDisplayedFilmsCount={this.handleShowMoreButtonClick} />}
          </section>
          <PageFooter />
        </div>
      </>
    );
  }
}

Main.propTypes = {
  films: PropTypes.arrayOf(filmProp),
  filmPromo: filmProp,
};
