import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewForm from './review-form';

let store = null;

describe('Component: ReviewForm', () => {
  beforeAll(() => {
    const mockStore = configureStore({});
    store = mockStore({
      ERROR: {isUnexpectedError: false},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <ReviewForm filmId={5} />
      </Provider>,
    );

    expect(screen.getAllByRole('radio').length).toBe(10);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('button').length).toBe(1);
  });
});
