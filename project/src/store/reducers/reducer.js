import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP, AuthorizationStatus} from '../../const';

const initialState = {
  promo: {film: {}, loading: false},
  films: {data: [], loading: false},
  genres: [],
  similar: [],
  favorites: [],
  film: {},
  active: {},
  comments: [],
  defaultGenre: DEFAULT_GENRE,
  currentGenre: DEFAULT_GENRE,
  displayedFilmsCount: DISPLAYED_FILMS_COUNT_STEP,
  showMoreCountStep: DISPLAYED_FILMS_COUNT_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_PROMO':
      return {
        ...state,
        promo: {
          film: action.payload,
          loading: true,
        },
      };
    case 'LOAD_FILMS':
      return {
        ...state,
        films: {
          data: action.payload.films,
          loading: true,
        },
        genres: action.payload.genres,
      };
    case 'LOAD_SIMILAR':
      return {
        ...state,
        similar: action.payload,
      };
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };
    case 'LOAD_FILM':
      return {
        ...state,
        film: action.payload,
      };
    case 'GET_ACTIVE_FILM':
      return {
        ...state,
        active: state.films.data.find((film) => film.id === action.payload),
      };
    case 'LOAD_COMMENTS':
      return {
        ...state,
        comments: action.payload,
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
    case 'REQUIRED_AUTHORIZATION':
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export default reducer;
