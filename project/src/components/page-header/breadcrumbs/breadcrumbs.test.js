import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Breadcrumbs from './breadcrumbs';

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const breadcrumbsItemCount = 2;
    const fakeName = 'Gladiator';

    const history = createMemoryHistory();
    const {container} = render(
      <Router history={history}>
        <Breadcrumbs name={fakeName} />
      </Router>,
    );

    expect(screen.getByText(fakeName)).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(container.querySelectorAll('.breadcrumbs__item').length).toBe(breadcrumbsItemCount);
  });
});
