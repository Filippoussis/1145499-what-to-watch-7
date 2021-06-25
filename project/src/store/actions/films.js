const loadFilms = (films) => ({
  type: 'LOAD_FILMS',
  payload: films,
});

const showMore = () => ({
  type: 'SHOW_MORE',
});

export {
  loadFilms,
  showMore
};
