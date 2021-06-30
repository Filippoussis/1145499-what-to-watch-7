import {AuthorizationStatus} from '../../const';
import {ActionCreator} from '../actions/actions';
import {adaptFilmsDataToClient} from '../../utils/adapter';

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get('/promo')
    .then(({data}) => dispatch(ActionCreator.loadPromo(adaptFilmsDataToClient(data))))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get('/films')
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map(adaptFilmsDataToClient))))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilm(adaptFilmsDataToClient(data))))
);

export const fetchSimilar = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}/similar`)
    .then(({data}) => dispatch(ActionCreator.loadSimilar(data.map(adaptFilmsDataToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get('/favorite')
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data.map(adaptFilmsDataToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get('/login')
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post('/login', {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute('./')))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete('/logout')
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.redirectToRoute('./')))
);
