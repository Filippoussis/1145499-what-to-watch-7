import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setGenre} from '../../../../../store/actions/actions';

function GenresItem(props) {

  const {genre, currentGenre} = props;
  const activeClassMod = genre === currentGenre ? 'catalog__genres-item--active' : '';

  const handleClick = (evt) => props.setGenre(evt.target.textContent);

  return (
    <li className={`catalog__genres-item ${activeClassMod}`}>
      <span className="catalog__genres-link" onClick={handleClick}>{genre}</span>
    </li>
  );
}

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  currentGenre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
};

const mapStateToProps = ({EVENT}) => ({
  currentGenre: EVENT.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(setGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresItem);
