import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';

import FilmCardButtons from './film-card-buttons';

let store = null;
let history = null;
const mockStore = configureStore({});

describe('Component: FilmCardButtons', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly AuthorizationStatus.AUTH', () => {

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardButtons id={1} isFavorite={false} isPromo={false} />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('button').length).toBe(2);
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });

  it('should render correctly AuthorizationStatus.NO_AUTH', () => {

    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardButtons id={1} isFavorite={false} isPromo={false} />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('button').length).toBe(2);
    expect(screen.queryByText('Add review')).toBeNull();
  });
});

