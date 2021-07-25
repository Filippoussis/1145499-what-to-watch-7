import {AuthorizationStatus} from '../../const';
import {adaptFilmDataToClient, adaptCommentClientToServer} from '../../utils/adapter';
import {
  loadPromo, loadFilms, loadFilm, loadSimilar, loadFavorites, loadComments,
  requireAuthorization, redirectToRoute, logout as closeSession, setUnexpectedError
} from '../actions/actions';

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get('/promo')
    .then(({data}) => dispatch(loadPromo(adaptFilmDataToClient(data))))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get('/films')
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmDataToClient))))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmDataToClient(data))))
);

export const fetchSimilar = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}/similar`)
    .then(({data}) => dispatch(loadSimilar(data.map(adaptFilmDataToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get('/favorite')
    .then(({data}) => dispatch(loadFavorites(data.map(adaptFilmDataToClient))))
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmId}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchComment = (filmId, filmData) => (dispatch, _getState, api) => (
  api.post(`/comments/${filmId}`, adaptCommentClientToServer(filmData))
    .then(() => dispatch(redirectToRoute(`/films/${filmId}`)))
    .catch(() => dispatch(setUnexpectedError(true)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get('/login')
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = (authData) => (dispatch, _getState, api) => (
  api.post('/login', authData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute('/'));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete('/logout')
    .then(() => {
      localStorage.removeItem('token');
      dispatch(closeSession());
      dispatch(redirectToRoute('/'));
    })
);

export const addFavorite = (filmId, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`/favorite/${filmId}/${status}`)
    .then(({data}) => {
      if (isPromo) {
        dispatch(loadPromo(adaptFilmDataToClient(data)));
      } else {
        dispatch(loadFilm(adaptFilmDataToClient(data)));
      }
    })
    .catch(() => {
      dispatch(redirectToRoute('/login'));
    })
);
