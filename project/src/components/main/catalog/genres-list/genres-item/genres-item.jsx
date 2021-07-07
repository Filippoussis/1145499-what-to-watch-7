import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../../../store/actions/actions';

function GenresItem(props) {

  const {genre, currentGenre, chooseGenre} = props;
  const activeClassMod = genre === currentGenre ? 'catalog__genres-item--active' : '';

  const handleClick = (evt) => chooseGenre(evt.target.textContent);

  return (
    <li className={`catalog__genres-item ${activeClassMod}`}>
      <span className="catalog__genres-link" onClick={handleClick}>{genre}</span>
    </li>
  );
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
