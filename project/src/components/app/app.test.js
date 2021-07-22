import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
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
          loaded: true,
        },
        films: {data: [], loaded: false},
        film: {data: {}, loaded: false},
        favorites: {data: [], loaded: false},
        similar: [],
        comments: [],
        player: {},
      },
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      EVENT: {
        currentGenre: 'All Genres',
        displayedFilmsCount: 8,
        showMoreCountStep: 8,
      },
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
    render(fakeApp);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('Заблудились?')).toBeInTheDocument();
    expect(screen.getByText('На главную')).toBeInTheDocument();
  });
});
