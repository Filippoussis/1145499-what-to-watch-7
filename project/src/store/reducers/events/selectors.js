import {NameSpace} from '../root-reducer';

export const getCurrentGenre = (state) => state[NameSpace.EVENT].currentGenre;
export const getDisplayedFilmsCount = (state) => state[NameSpace.EVENT].displayedFilmsCount;
