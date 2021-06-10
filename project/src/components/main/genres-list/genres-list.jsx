import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DEFAULT_GENRE} from '../../../const';

import GenresItem from './genres-item/genres-item';

export default class GenresList extends Component {
  constructor() {
    super();

    this.state = {
      currentGenre: DEFAULT_GENRE,
    };

    this.changeGenre = this.changeGenre.bind(this);
  }

  changeGenre(value) {
    this.setState({
      currentGenre: value,
    });
  }

  render() {

    const {genres} = this.props;
    const {currentGenre} = this.state;

    return (
      <ul className="catalog__genres-list">
        {genres.map((genre) => <GenresItem key={genre} genre={genre} currentGenre={currentGenre} changeGenre={this.changeGenre} />)}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
};
