import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {DEFAULT_GENRE} from '../../../../../const';

import GenresItem from './genres-item';

const mockStore = configureStore({});

describe('Component: GenresItem', () => {
  it('should render correctly', () => {
    const store = mockStore({
      EVENT: {currentGenre: DEFAULT_GENRE},
    });

    const fakeGenre = 'Drama';

    render(
      <Provider store={store}>
        <GenresItem genre={fakeGenre} />
      </Provider>,
    );

    expect(screen.getByText('Drama')).toBeInTheDocument();
  });
});
