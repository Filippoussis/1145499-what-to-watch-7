import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmCardOverview from './film-card-overview';

test('correctly rendered FilmCardOverview', () => {
  const mockData = {
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
  };

  render(<FilmCardOverview film={mockData} />);

  expect(screen.getByText('In the 1930s, the Grand Budapest Hotel is a popular European ski resort...')).toBeInTheDocument();
  expect(screen.getByText('Director: Wes Andreson')).toBeInTheDocument();
  expect(screen.getByText('Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan and other')).toBeInTheDocument();
  expect(screen.getByText('240 ratings')).toBeInTheDocument();
  expect(screen.getByText('8,9')).toBeInTheDocument();
  expect(screen.getByText('Very good')).toBeInTheDocument();
});
