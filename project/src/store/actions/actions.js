import {createAction} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../../const';

export const ActionType = {
  LOAD_PROMO: 'data/load_promo',
  LOAD_FILMS: 'data/load_films',
  LOAD_FILM: 'data/load_film',
  LOAD_SIMILAR: 'data/load_similar',
  LOAD_FAVORITES: 'data/load_favorites',
  LOAD_COMMENTS: 'data/load_comments',

  SET_GENRE: 'events/set_genre',
  SHOW_MORE: 'events/show_more',

  LOGOUT: 'user/logout',
  REQUIRED_AUTHORIZATION: 'user/required_authorization',

  SET_UNEXPECTED_ERROR: 'error/set_unexpected_error',

  REDIRECT_TO_ROUTE: 'common/redirect_to_route',
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
