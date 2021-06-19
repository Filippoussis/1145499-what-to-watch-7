const RATING_TITLES = [
  {rating: 10, title: 'Awesome'},
  {rating: 8, title: 'Very good'},
  {rating: 5, title: 'Good'},
  {rating: 3, title: 'Normal'},
  {rating: 0, title: 'Bad'},
];

export const getRatingTitle = (value) => RATING_TITLES
  .find(({rating}) => rating <= value)
  .title || '';
