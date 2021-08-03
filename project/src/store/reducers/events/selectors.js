import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';

import getGenresData from '../../../utils/genres';
import {DEFAULT_GENRE} from '../../../const';

const getFilms = (state) =>  state[NameSpace.DATA].films.data;

export const getCurrentGenre = (state) => state[NameSpace.EVENT].currentGenre;
export const getDisplayedFilmsCount = (state) => state[NameSpace.EVENT].displayedFilmsCount;

export const getGenres = createSelector(
  getFilms,
  (films) => getGenresData(films),
);

export const getFiltredFilms = createSelector(
  getFilms,
  getCurrentGenre,
  (films, currentGenre) => currentGenre !== DEFAULT_GENRE ? films.filter((film) => film.genre === currentGenre) : films,
);
