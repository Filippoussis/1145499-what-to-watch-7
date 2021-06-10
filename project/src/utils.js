import {DEFAULT_GENRE} from './const';

const getGenres = (films) => {
  const genres = new Set();
  genres.add(DEFAULT_GENRE);
  films.forEach((film) => genres.add(film.genre));

  return Array.from(genres);
};

export default getGenres;
