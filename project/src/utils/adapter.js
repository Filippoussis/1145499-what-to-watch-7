export const adaptFilmsDataToClient = (item) => (
  Object.assign(
    {},
    {
      id: item.id,
      name: item.name,
      posterImage: item.poster_image,
      previewImage: item.preview_image,
      backgroundImage: item.background_image,
      backgroundColor: item.background_color,
      videoLink: item.video_link,
      previewVideoLink: item.preview_video_link,
      description: item.description,
      rating: item.rating,
      scoresCount: item.scores_count,
      director: item.director,
      starring: item.starring,
      runTime: item.run_time,
      genre: item.genre,
      released: item.released,
      isFavorite: item.is_favorite,
    },
  )
);
