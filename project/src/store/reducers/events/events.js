import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP} from '../../../const';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
  showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
};

const events = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_GENRE':
      return {
        ...state,
        currentGenre: action.payload,
        displayedFilmsCount: state.showMoreCountStep,
      };
    case 'SHOW_MORE':
      return {
        ...state,
        displayedFilmsCount: state.displayedFilmsCount + state.showMoreCountStep,
      };
    default:
      return state;
  }
};

export {events};
