const initialState = {
  promo: {data: {}, loaded: false},
  films: {data: [], loaded: false},
  film: {data: {}, loaded: false},
  favorites: {data: [], loaded: false},
  similar: [],
  comments: [],
  player: {},
};

const filmsData = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_PROMO':
      return {
        ...state,
        promo: {
          data: action.payload,
          loaded: true,
        },
      };
    case 'LOAD_FILMS':
      return {
        ...state,
        films: {
          data: action.payload,
          loaded: true,
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
          loaded: true,
        },
      };
    case 'LOAD_FILM':
      return {
        ...state,
        film: {
          data: action.payload,
          loaded: true,
        },
      };
    case 'LOAD_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'LOAD_PLAYER':
      return {
        ...state,
        player: state.films.data.find((film) => film.id === action.payload),
      };
    default:
      return state;
  }
};

export {filmsData};
