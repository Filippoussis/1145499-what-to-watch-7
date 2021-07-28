import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';

import AddReview from './add-review';

let store = null;
let history = null;

describe('Component: AddReview', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore({});
    store = mockStore({
      DATA: {film: {data: {}, loaded: false}},
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      ERROR: {isUnexpectedError: false},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('radio').length).toBe(10);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('button').length).toBe(1);
  });
});
