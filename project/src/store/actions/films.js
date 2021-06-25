const loadPromo = (film) => ({
  type: 'LOAD_PROMO',
  payload: film,
});

const loadFilms = (films) => ({
  type: 'LOAD_FILMS',
  payload: films,
});

const loadSelectedFilm = (film) => ({
  type: 'LOAD_SELECTED_FILM',
  payload: film,
});

const showMore = () => ({
  type: 'SHOW_MORE',
});

export {
  loadPromo,
  loadFilms,
  loadSelectedFilm,
  showMore
};
