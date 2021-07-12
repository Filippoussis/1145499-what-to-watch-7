import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setGenre} from '../../../../store/actions/actions';
import {getCurrentGenre} from '../../../../store/reducers/events/selectors';

import GenresItem from './genres-item/genres-item';

import {DEFAULT_GENRE} from '../../../../const';


function GenresList(props) {

  const {genres, currentGenre, setCurrentGenre} = props;

  const selectGenre = (genre) => setCurrentGenre(genre);

  const request = useCallback(() => () => setCurrentGenre(DEFAULT_GENRE), [setCurrentGenre]);
  useEffect(() => request(), [request]);

  const genresItems = genres.map((genre) => <GenresItem key={genre} genre={genre} currentGenre={currentGenre} selectGenre={selectGenre}/>);

  return (
    <ul className="catalog__genres-list">
      {genresItems}
    </ul>
  );
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentGenre: (genre) => dispatch(setGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
