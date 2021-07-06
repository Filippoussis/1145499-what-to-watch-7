import {AuthorizationStatus} from '../../const';
import {ActionCreator} from '../actions/actions';
import {adaptFilmDataToClient, adaptCommentClientToServer} from '../../utils/adapter';

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get('/promo')
    .then(({data}) => dispatch(ActionCreator.loadPromo(adaptFilmDataToClient(data))))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get('/films')
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map(adaptFilmDataToClient))))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilm(adaptFilmDataToClient(data))))
);

export const fetchSimilar = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}/similar`)
    .then(({data}) => dispatch(ActionCreator.loadSimilar(data.map(adaptFilmDataToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get('/favorite')
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data.map(adaptFilmDataToClient))))
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const sendComment = (filmId, filmData) => (dispatch, _getState, api) => (
  api.post(`/comments/${filmId}`, adaptCommentClientToServer(filmData))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${filmId}`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get('/login')
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = (authData) => (dispatch, _getState, api) => (
  api.post('/login', authData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.redirectToRoute('/'));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete('/logout')
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
      dispatch(ActionCreator.redirectToRoute('/'));
    })
);
