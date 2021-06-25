const getGenres = (genres) => ({
  type: 'GET_GENRES',
  payload: genres,
});

const chooseGenre = (genre) => ({
  type: 'CHOOSE_GENRE',
  payload: genre,
});

export {
  getGenres,
  chooseGenre
};
