import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

function GenresItem({genre}) {
  return (
    <li className="catalog__genres-item">
      <Link to="#" className="catalog__genres-link">{genre}</Link>
    </li>
  );
}

const getGenresItems = () => GENRES.map((genre) => <GenresItem key={genre} genre={genre}/>);

function GenresList() {
  return (
    <ul className="catalog__genres-list">
      {getGenresItems()}
    </ul>
  );
}

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenresList;
