import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class GenresItem extends Component {
  constructor() {
    super();

    this.handleClick =this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.changeGenre(evt.target.textContent);
  }

  render() {

    const {genre, currentGenre} = this.props;
    const activeClassMod = genre === currentGenre ? 'catalog__genres-item--active' : '';

    return (
      <li className={`catalog__genres-item ${activeClassMod}`}>
        <span className="catalog__genres-link" onClick={this.handleClick}>{genre}</span>
      </li>
    );
  }
}

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  currentGenre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};
