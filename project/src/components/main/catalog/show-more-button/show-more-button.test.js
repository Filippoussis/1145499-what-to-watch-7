import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';

import ShowMoreButton from './show-more-button';

const mockStore = configureStore({});
let store;
let fakeApp;

describe('Component: ShowMoreButton', () => {
  beforeAll(() => {
    store = mockStore({});

    fakeApp = (
      <Provider store={store}>
        <ShowMoreButton />
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText('Show more')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
