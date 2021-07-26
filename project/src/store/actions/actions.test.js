import {
  loadPromo, loadFilms, loadFilm, loadSimilar, loadFavorites, loadComments,
  setGenre, resetGenre, showMore, loadPlayer, requireAuthorization, logout, redirectToRoute,
  ActionType
} from './actions';

describe('Actions', () => {
  it('loadPromo', () => {
    const promo = {
      id: 1,
      name: 'Kolobok',
    };

    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: promo,
    };

    expect(loadPromo(promo)).toEqual(expectedAction);
  });

  it('loadFilms', () => {
    const films = [
      {
        id: 1,
        name: 'Kolobok',
      },
      {
        id: 2,
        name: 'Nu pogodi',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it('loadFilm', () => {
    const film = {
      id: 1,
      name: 'Kolobok',
    };

    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: film,
    };

    expect(loadFilm(film)).toEqual(expectedAction);
  });

  it('loadSimilar', () => {
    const films = [
      {
        id: 1,
        name: 'Kolobok',
      },
      {
        id: 2,
        name: 'Nu pogodi',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_SIMILAR,
      payload: films,
    };

    expect(loadSimilar(films)).toEqual(expectedAction);
  });

  it('loadFavorites', () => {
    const films = [
      {
        id: 1,
        name: 'Kolobok',
      },
      {
        id: 2,
        name: 'Nu pogodi',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    };

    expect(loadFavorites(films)).toEqual(expectedAction);
  });

  it('loadComments', () => {
    const comments = [
      {
        id: 1,
        name: 'Kolobok',
      },
      {
        id: 2,
        name: 'Nu pogodi',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('setGenre', () => {
    const genre = 'Drama';

    const expectedAction = {
      type: ActionType.SET_GENRE,
      payload: genre,
    };

    expect(setGenre(genre)).toEqual(expectedAction);
  });

  it('resetGenre', () => {
    const expectedAction = {
      type: ActionType.SET_GENRE,
      payload: 'All genres',
    };

    expect(resetGenre()).toEqual(expectedAction);
  });

  it('showMore', () => {
    const expectedAction = {
      type: ActionType.SHOW_MORE,
    };

    expect(showMore()).toEqual(expectedAction);
  });

  it('loadPlayer', () => {
    const filmId = 1;

    const expectedAction = {
      type: ActionType.LOAD_PLAYER,
      payload: filmId,
    };

    expect(loadPlayer(filmId)).toEqual(expectedAction);
  });

  it('requireAuthorization', () => {
    const status = 'AUTH';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('logout', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('redirectToRoute', () => {
    const url = '/';

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});
