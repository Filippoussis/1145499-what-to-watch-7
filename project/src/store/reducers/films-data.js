const initialState = {
  promo: {data: {}, loading: false},
  films: {data: [], loading: false},
  film: {data: {}, loading: false},
  favorites: {data: [], loading: false},
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
