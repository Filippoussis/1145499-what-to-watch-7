export const loadPromo = (film) => ({
  type: 'LOAD_PROMO',
  payload: film,
});

export const loadFilms = (films) => ({
  type: 'LOAD_FILMS',
  payload: films,
});

export const loadFilm = (film) => ({
  type: 'LOAD_FILM',
  payload: film,
});

export const loadSimilar = (films) => ({
  type: 'LOAD_SIMILAR',
  payload: films,
});

export const loadFavorites = (films) => ({
  type: 'LOAD_FAVORITES',
  payload: films,
});

export const loadComments = (comments) => ({
  type: 'LOAD_COMMENTS',
  payload: comments,
});

export const setGenre = (genre) => ({
  type: 'SET_GENRE',
  payload: genre,
});

export const showMore = () => ({
  type: 'SHOW_MORE',
});

export const getPlayer = (filmId) => ({
  type: 'GET_PLAYER',
  payload: filmId,
});

export const requireAuthorization = (status) => ({
  type: 'REQUIRED_AUTHORIZATION',
  payload: status,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const redirectToRoute = (url) => ({
  type: 'REDIRECT_TO_ROUTE',
  payload: url,
});
