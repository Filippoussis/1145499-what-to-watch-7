import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentGenre} from '../../../../../store/reducers/events/selectors';
import {setGenre} from '../../../../../store/actions/actions';
import PropTypes from 'prop-types';

function GenresItem({genre}) {

  const dispatch = useDispatch();
  const currentGenre = useSelector(getCurrentGenre);

  const activeClassMod = genre === currentGenre ? 'catalog__genres-item--active' : '';

  const handleClick = (evt) => dispatch(setGenre(evt.target.dataset.value));

  return (
    <li className={`catalog__genres-item ${activeClassMod}`}>
      <span className="catalog__genres-link" data-value={genre} onClick={handleClick}>{genre}</span>
    </li>
  );
}

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenresItem;
