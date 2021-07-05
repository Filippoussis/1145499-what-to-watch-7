import getGenres from '../../utils/genres';

export const ActionCreator = {
  loadPromo: (film) => ({
    type: 'LOAD_PROMO',
    payload: film,
  }),
  loadFilms: (films) => ({
    type: 'LOAD_FILMS',
    payload: {
      films,
      genres: getGenres(films),
    },
  }),
  loadFilm: (film) => ({
    type: 'LOAD_FILM',
    payload: film,
  }),
  loadSimilar: (films) => ({
    type: 'LOAD_SIMILAR',
    payload: films,
  }),
  loadFavorites: (films) => ({
    type: 'LOAD_FAVORITES',
    payload: films,
  }),
  getActiveFilm: (id) => ({
    type: 'GET_ACTIVE_FILM',
    payload: id,
  }),
  loadComments: (comments) => ({
    type: 'LOAD_COMMENTS',
    payload: comments,
  }),
  showMore: () => ({
    type: 'SHOW_MORE',
  }),
  getGenres: (genres) => ({
    type: 'GET_GENRES',
    payload: genres,
  }),
  chooseGenre: (genre) => ({
    type: 'CHOOSE_GENRE',
    payload: genre,
  }),
  requireAuthorization: (status) => ({
    type: 'REQUIRED_AUTHORIZATION',
    payload: status,
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),

  redirectToRoute: (url) => ({
    type: 'REDIRECT_TO_ROUTE',
    payload: url,
  }),
};
