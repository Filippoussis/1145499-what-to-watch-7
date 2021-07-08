import React from 'react';
import PropTypes from 'prop-types';

import GenresItem from './genres-item/genres-item';

function GenresList(props) {

  const genresItems = props.genres.map((genre) => <GenresItem key={genre} genre={genre} />);

  return (
    <ul className="catalog__genres-list">
      {genresItems}
    </ul>
  );
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenresList;
