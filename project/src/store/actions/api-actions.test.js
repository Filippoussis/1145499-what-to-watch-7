import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {AuthorizationStatus} from '../../const';
import {adaptFilmDataToClient} from '../../utils/adapter';
import {
  fetchPromo, fetchFilms, fetchFavorites, checkAuth, login, logout,
  fetchFilm, fetchSimilar, fetchComments, fetchComment, addFavorite
} from './api-actions';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {}, () => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet('/login')
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost('/login')
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/',
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete('/logout')
      .reply(204);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/',
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = fetchPromo();

    apiMock
      .onGet('/promo')
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adaptFilmDataToClient([{fake: true}]),
        });
      });
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet('/films')
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}].map(adaptFilmDataToClient),
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet('/favorite')
      .reply(200, [{fake: true}]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}].map(adaptFilmDataToClient),
        });
      });
  });

  it('should make a correct API call to GET /film', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 5;
    const filmLoader = fetchFilm(fakeFilmId);

    apiMock
      .onGet(`/films/${fakeFilmId}`)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: adaptFilmDataToClient([{fake: true}]),
        });
      });
  });

  it('should make a correct API call to GET /similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 3;
    const similarLoader = fetchSimilar(fakeFilmId);

    apiMock
      .onGet(`/films/${fakeFilmId}/similar`)
      .reply(200, [{fake: true}]);

    return similarLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR,
          payload: [{fake: true}].map(adaptFilmDataToClient),
        });
      });
  });

  it('should make a correct API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 4;
    const commentsLoader = fetchComments(fakeFilmId);

    apiMock
      .onGet(`/comments/${fakeFilmId}`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 2;
    const fakeComment = {id: 3, comment: 'Super film!'};
    const commentLoader = fetchComment(fakeFilmId, fakeComment);

    apiMock
      .onPost(`/comments/${fakeFilmId}`)
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/${fakeFilmId}`,
        });
      });
  });

  it('error to POST /comment', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 2;
    const fakeComment = {id: 3, comment: 'Super film!'};
    const commentLoader = fetchComment(fakeFilmId, fakeComment);

    apiMock
      .onPost(`/comments/${fakeFilmId}`)
      .reply(400, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_UNEXPECTED_ERROR,
          payload: true,
        });
      });
  });

  it('should make a correct API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 7;
    const status = 1;
    const isPromo = true;
    const addFavoriteLoader = addFavorite(fakeFilmId, status, isPromo);

    apiMock
      .onPost(`/favorite/${fakeFilmId}/${status}`)
      .reply(200, [{fake: true}]);

    return addFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adaptFilmDataToClient([{fake: true}]),
        });
      });
  });

  it('error to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFilmId = 7;
    const status = 0;
    const isPromo = false;
    const addFavoriteLoader = addFavorite(fakeFilmId, status, isPromo);

    apiMock
      .onPost(`/favorite/${fakeFilmId}/${status}`)
      .reply(401, [{fake: true}]);

    return addFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/login',
        });
      });
  });
});
