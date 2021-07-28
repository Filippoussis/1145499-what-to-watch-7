import {createAction} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../../const';

export const ActionType = {
  LOAD_PROMO: 'LOAD_PROMO',
  LOAD_FILMS: 'LOAD_FILMS',
  LOAD_FILM: 'LOAD_FILM',
  LOAD_SIMILAR: 'LOAD_SIMILAR',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_PLAYER: 'LOAD_PLAYER',
  SET_GENRE: 'SET_GENRE',
  SHOW_MORE: 'SHOW_MORE',
  LOGOUT: 'LOGOUT',
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  SET_UNEXPECTED_ERROR: 'SET_UNEXPECTED_ERROR',
};

export const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => ({
  payload: promo,
}));

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({
  payload: film,
}));

export const loadSimilar = createAction(ActionType.LOAD_SIMILAR, (films) => ({
  payload: films,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (films) => ({
  payload: films,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const setGenre = createAction(ActionType.SET_GENRE, (genre) => ({
  payload: genre,
}));

export const resetGenre = createAction(ActionType.SET_GENRE, () => ({
  payload: DEFAULT_GENRE,
}));

export const showMore = createAction(ActionType.SHOW_MORE);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUnexpectedError = createAction(ActionType.SET_UNEXPECTED_ERROR, (bool) => ({
  payload: bool,
}));
