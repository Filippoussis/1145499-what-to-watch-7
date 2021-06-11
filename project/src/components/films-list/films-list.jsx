import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from './small-film-card/small-film-card';

import filmProp from '../../props/film';

export default class FilmsList extends Component {
  constructor() {
    super();

    this.state = {
      activeCardId: '',
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(id) {
    this.setState({
      activeCardId: id,
    });
  }

  render() {

    const filmsItems = this.props.films.map(({id, name, previewImage}) => <SmallFilmCard key={id} id={id} name={name} previewImage={previewImage} activateCard={this.handleMouseOver} />);

    return (
      <div className="catalog__films-list">
        {filmsItems}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};
