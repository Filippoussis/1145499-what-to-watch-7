import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import PageFooter from './page-footer';

let history = null;

describe('Component: PageFooter', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {

    render(
      <Router history={history}>
        <PageFooter />
      </Router>,
    );

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
