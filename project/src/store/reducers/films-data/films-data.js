import {createReducer} from '@reduxjs/toolkit';
import {loadPromo, loadFilms, loadFilm, loadFavorites, loadSimilar, loadComments, loadPlayer} from '../../actions/actions';

const initialState = {
  promo: {data: {}, loaded: false},
  films: {data: [], loaded: false},
  film: {data: {}, loaded: false},
  favorites: {data: [], loaded: false},
  similar: [],
  comments: [],
  player: {},
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromo, (state, action) => {
      state.promo.data = action.payload;
      state.promo.loaded = true;
    })
    .addCase(loadFilms, (state, action) => {
      state.films.data = action.payload;
      state.films.loaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film.data = action.payload;
      state.film.loaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites.data = action.payload;
      state.favorites.loaded = true;
    })
    .addCase(loadSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadPlayer, (state, action) => {
      state.player = state.films.data.find((film) => film.id === action.payload);
    });
});

export {filmsData};
