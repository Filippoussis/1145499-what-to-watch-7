import {createReducer} from '@reduxjs/toolkit';
import {setGenre, showMore} from '../../actions/actions';
import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP} from '../../../const';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
  showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
};

const events = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.currentGenre = action.payload;
      state.displayedFilmsCount = state.showMoreCountStep;
    })
    .addCase(showMore, (state) => {
      state.displayedFilmsCount = state.displayedFilmsCount + state.showMoreCountStep;
    });
});

export {events};
