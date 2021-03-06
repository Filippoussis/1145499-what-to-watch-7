import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {AuthorizationStatus} from '../../const';

import MyList from './my-list';

let store = null;
let history = null;

describe('Component: MyList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore({});
    store = mockStore({
      DATA: {favorites: {data: [
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
          isFavorite: true,
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
          genre: 'Comedy',
          released: 2014,
          isFavorite: true,
        },
      ], loaded: true}},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      ERROR: {isUnexpectedError: false},
    });
  });

  it('should render correctly', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(screen.getByText('Gladiator')).toBeInTheDocument();
  });
});
