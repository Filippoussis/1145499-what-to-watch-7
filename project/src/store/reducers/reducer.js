import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP} from '../../const';

const initialState = {
  films: [],
  genres: [],
  defaultGenre: DEFAULT_GENRE,
  currentGenre: DEFAULT_GENRE,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
  showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_FILMS':
      return {
        ...state,
        films: action.payload,
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };
    case 'CHOOSE_GENRE':
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

export default reducer;