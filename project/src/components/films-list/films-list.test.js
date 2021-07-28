import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FilmsList from './films-list';

const films = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posteriImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://some-link',
    previewVideoLink: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Gladiator',
    posteriImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://some-link',
    previewVideoLink: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort...',
    rating: 9.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
];

const history = createMemoryHistory();

describe('Component: FilmsList', () => {
  it('should render correctly', () => {
    const filmCardCount = 2;

    const {container} = render(
      <Router history={history}>
        <FilmsList films={films} />
      </Router>,
    );

    expect(container.querySelectorAll('.small-film-card').length).toBe(filmCardCount);
    expect(screen.getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(screen.getByText('Gladiator')).toBeInTheDocument();
  });
});
