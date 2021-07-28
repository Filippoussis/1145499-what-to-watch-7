import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../../const';

import UserBlock from './user-block';

let store = null;
let history = null;

describe('Component: UserBlock', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly with AuthorizationStatus.AUTH', () => {
    const mockStore = configureStore({});
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render correctly with AuthorizationStatus.NO_AUTH', () => {
    const mockStore = configureStore({});
    store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
