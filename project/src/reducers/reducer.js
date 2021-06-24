import {DEFAULT_GENRE} from '../const';

const initialState = {
  films: [],
  genres: [],
  defaultGenre: DEFAULT_GENRE,
  currentGenre: DEFAULT_GENRE,
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
      };
    default:
      return state;
  }
};

export default reducer;
