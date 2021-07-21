import {filmsData} from './films-data';

import {
  loadPromo, loadFilms, loadFilm,
  loadSimilar, loadFavorites, loadComments
} from '../../actions/actions';

const state = {
  promo: {data: {}, loaded: false},
  films: {data: [], loaded: false},
  film: {data: {}, loaded: false},
  favorites: {data: [], loaded: false},
  similar: [],
  comments: [],
  player: {},
};

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(undefined, {}))
      .toEqual(state);
  });

  it('loadPromo', () => {
    const promo = {
      id: 1,
      name: 'Kolobok',
    };

    expect(filmsData(state, loadPromo(promo)))
      .toEqual({
        ...state,
        promo: {data: promo, loaded: true},
      });
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

    expect(filmsData(state, loadFilms(films)))
      .toEqual({
        ...state,
        films: {data: films, loaded: true},
      });
  });

  it('loadFilm', () => {
    const film = {
      id: 1,
      name: 'Kolobok',
    };

    expect(filmsData(state, loadFilm(film)))
      .toEqual({
        ...state,
        film: {data: film, loaded: true},
      });
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

    expect(filmsData(state, loadSimilar(films)))
      .toEqual({
        ...state,
        similar: films,
      });
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

    expect(filmsData(state, loadFavorites(films)))
      .toEqual({
        ...state,
        favorites: {data: films, loaded: true},
      });
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

    expect(filmsData(state, loadComments(comments)))
      .toEqual({
        ...state,
        comments,
      });
  });
});
