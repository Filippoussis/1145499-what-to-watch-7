import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../../../store/actions/actions';

class GenresItem extends Component {
  constructor() {
    super();

    this.handleClick =this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.chooseGenre(evt.target.textContent);
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
  chooseGenre: PropTypes.func.isRequired,
};

const mapStateToProps = ({currentGenre}) => ({
  currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  chooseGenre: (genre) => dispatch(ActionCreator.chooseGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresItem);
