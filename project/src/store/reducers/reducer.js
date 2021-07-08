import {DEFAULT_GENRE, DISPLAYED_FILMS_COUNT_STEP, AuthorizationStatus} from '../../const';

const initialState = {
  promo: {data: {}, loading: false},
  films: {data: [], loading: false},
  film: {data: {}, loading: false},
  favorites: {data: [], loading: false},
  similar: [],
  comments: [],
  player: {},
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
          data: action.payload,
          loading: true,
        },
      };
    case 'LOAD_FILMS':
      return {
        ...state,
        films: {
          data: action.payload,
          loading: true,
        },
      };
    case 'LOAD_SIMILAR':
      return {
        ...state,
        similar: action.payload,
      };
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: {
          data: action.payload,
          loading: true,
        },
      };
    case 'LOAD_FILM':
      return {
        ...state,
        film: {
          data: action.payload,
          loading: true,
        },
      };
    case 'LOAD_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
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
    case 'GET_PLAYER':
      return {
        ...state,
        player: state.films.data.find((film) => film.id === action.payload),
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
