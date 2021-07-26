import React from 'react';
import {useSelector} from 'react-redux';
import {getGenres} from '../../../../store/reducers/events/selectors';

import GenresItem from './genres-item/genres-item';

function GenresList() {

  const genres = useSelector(getGenres);
  const genresItems = genres.map((genre) => <GenresItem key={genre} genre={genre} />);

  return (
    <ul className="catalog__genres-list">
      {genresItems}
    </ul>
  );
}

export default GenresList;
