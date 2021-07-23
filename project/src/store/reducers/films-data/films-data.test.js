import {filmsData} from './films-data';
import {ActionType} from '../../actions/actions';

const state = {
  promo: {data: {}, loaded: false},
  films: {data: [], loaded: false},
  film: {data: {}, loaded: false},
  favorites: {data: [], loaded: false},
  similar: [],
  comments: [],
};

const film = {
  id: 1,
  name: 'The Grand Budapest Hotel',
  posteriImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Andreson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

const films = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posteriImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://some-link',
    previewVideoLink: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'The Grand Budapest Hotel',
    posteriImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://some-link',
    previewVideoLink: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
];

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson...',
    date: '2019-05-08T14:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 5,
      name: 'John Golt',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson...',
    date: '2019-05-08T14:13:56.569Z',
  },
];

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(undefined, {}))
      .toEqual(state);
  });

  it('loadPromo', () => {
    const loadPromoAction = {
      type: ActionType.LOAD_PROMO,
      payload: film,
    };

    expect(filmsData(state, loadPromoAction))
      .toEqual({
        ...state,
        promo: {data: film, loaded: true},
      });
  });

  it('loadFilms', () => {
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(filmsData(state, loadFilmsAction))
      .toEqual({
        ...state,
        films: {data: films, loaded: true},
      });
  });

  it('loadFilm', () => {
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: film,
    };

    expect(filmsData(state, loadFilmAction))
      .toEqual({
        ...state,
        film: {data: film, loaded: true},
      });
  });

  it('loadSimilar', () => {
    const loadSimilarAction = {
      type: ActionType.LOAD_SIMILAR,
      payload: films,
    };

    expect(filmsData(state, loadSimilarAction))
      .toEqual({
        ...state,
        similar: films,
      });
  });

  it('loadFavorites', () => {
    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    };

    expect(filmsData(state, loadFavoritesAction))
      .toEqual({
        ...state,
        favorites: {data: films, loaded: true},
      });
  });

  it('loadComments', () => {
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(filmsData(state, loadCommentsAction))
      .toEqual({
        ...state,
        comments,
      });
  });
});
