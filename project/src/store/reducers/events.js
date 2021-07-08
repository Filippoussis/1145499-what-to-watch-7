import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP, AuthorizationStatus} from '../../const';

const initialState = {
  defaultGenre: DEFAULT_GENRE,
  currentGenre: DEFAULT_GENRE,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
  showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
