export const STARS_VALUES = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

export const DEFAULT_GENRE = 'All genres';

export const GENRES_COUNT_LIMIT = 10;

export const FILM_CARD_NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

export const DISPLAYED_FILMS_COUNT_STEP = 8;

export const SIMILAR_FILMS_COUNT = 4;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/mylist',
  PLAYER: '/player/:id',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
};

export const ApiRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR: '/similar',
  COMMENTS: '/comments',
  REVIEW: 'review',
  PLAYER: '/player',
};
