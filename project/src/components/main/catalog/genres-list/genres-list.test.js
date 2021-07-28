import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {DEFAULT_GENRE} from '../../../../const';

import GenresList from './genres-list';

const mockStore = configureStore({});

describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      DATA: {films: {data: [
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
          rating: 8.9,
          scoresCount: 240,
          director: 'Wes Andreson',
          starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
          runTime: 99,
          genre: 'Drama',
          released: 2014,
          isFavorite: false,
        },
      ], loaded: true}},
      EVENT: {currentGenre: DEFAULT_GENRE},
    });

    const totalGenresItem = 3;

    const {container} = render(
      <Provider store={store}>
        <GenresList />
      </Provider>,
    );

    expect(container.querySelectorAll('.catalog__genres-item').length).toBe(totalGenresItem);
    expect(screen.getByText('All genres')).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
  });
});
