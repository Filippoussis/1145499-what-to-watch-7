import {NameSpace} from '../root-reducer';

export const getPromoData = (state) => state[NameSpace.DATA].promo.data;
export const getLoadedPromoStatus = (state) => state[NameSpace.DATA].promo.loaded;

export const getFilmsData = (state) => state[NameSpace.DATA].films.data;
export const getLoadedFilmsStatus = (state) => state[NameSpace.DATA].films.loaded;

export const getFilmData = (state) => state[NameSpace.DATA].film.data;
export const getLoadedFilmStatus = (state) => state[NameSpace.DATA].film.loaded;

export const getFavoritesData = (state) => state[NameSpace.DATA].favorites.data;
export const getLoadedFavoritesStatus = (state) => state[NameSpace.DATA].favorites.loaded;

export const getSimilar = (state) => state[NameSpace.DATA].similar;
export const getComments = (state) => state[NameSpace.DATA].comments;
