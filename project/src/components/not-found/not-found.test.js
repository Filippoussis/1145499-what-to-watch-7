import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from './not-found';

test('NotFound', () => {
  const history = createMemoryHistory();
  const {getByText} = render(
    <Router history={history}>
      <NotFound />
    </Router>,
  );
  const headerElement = getByText('Заблудились?');
  const linkElement = getByText('На главную');

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
