import {DEFAULT_GENRE, GENRES_COUNT_LIMIT} from './const';

const getGenres = (films) => {
  const genres = new Set();
  genres.add(DEFAULT_GENRE);
  films.forEach((film) => genres.add(film.genre));

  return Array.from(genres).slice(0, GENRES_COUNT_LIMIT);
};

export default getGenres;
