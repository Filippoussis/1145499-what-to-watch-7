import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';

import ShowMoreButton from './show-more-button';

const mockStore = configureStore({});

test('ShowMoreButton', () => {
  const {getByText, getByRole} = render(
    <Provider store={mockStore({})}>
      <ShowMoreButton />
    </Provider>,
  );
  const labelElement = getByText('Show more');
  const roleElement = getByRole('button');

  expect(labelElement).toBeInTheDocument();
  expect(roleElement).toBeInTheDocument();
});
