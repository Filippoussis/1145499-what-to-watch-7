import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      DATA: {
        promo: {
          data: {
            id: 1,
            name: 'Interstellar',
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
          loaded: true,
        },
        films: {data: [
          {
            id: 2,
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
            id: 3,
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
            genre: 'Drama',
            released: 2014,
            isFavorite: false,
          },
        ], loaded: true},
        film: {data: {}, loaded: false},
        favorites: {data: [
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
            rating: 9.9,
            scoresCount: 240,
            director: 'Wes Andreson',
            starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
            runTime: 99,
            genre: 'Comedy',
            released: 2014,
            isFavorite: true,
          },
        ], loaded: true},
        similar: [],
        comments: [],
      },
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      EVENT: {
        currentGenre: 'All Genres',
        displayedFilmsCount: 8,
        showMoreCountStep: 8,
      },
      ERROR: {isUnexpectedError: false},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(fakeApp);

    expect(screen.queryByLabelText(/Email address/i)).toBeNull();
    expect(screen.queryByLabelText(/Password/i)).toBeNull();
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('Заблудились?')).toBeInTheDocument();
    expect(screen.getByText('На главную')).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to /mylist', () => {
    history.push('/mylist');
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(screen.getByText('Gladiator')).toBeInTheDocument();
  });

  it('should render "Main" when user navigate to /', () => {
    history.push('/');
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(fakeApp);

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
  });
});
