import {NameSpace} from '../root-reducer';

import getGenresData from '../../../utils/genres';
import {DEFAULT_GENRE} from '../../../const';

export const getCurrentGenre = (state) => state[NameSpace.EVENT].currentGenre;
export const getDisplayedFilmsCount = (state) => state[NameSpace.EVENT].displayedFilmsCount;


export const getGenres = (state) => {
  const films = state[NameSpace.DATA].films.data;
  return getGenresData(films);
};

export const getFiltredFilms = (state) => {
  const films = state[NameSpace.DATA].films.data;
  const currentGenre = state[NameSpace.EVENT].currentGenre;
  return currentGenre !== DEFAULT_GENRE ? films.filter((film) => film.genre === currentGenre) : films;
};
