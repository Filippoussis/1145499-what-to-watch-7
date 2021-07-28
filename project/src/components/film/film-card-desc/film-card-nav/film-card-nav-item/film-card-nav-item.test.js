import React from 'react';
import {render, screen} from '@testing-library/react';

import FilmCardNavItem from './film-card-nav-item';

describe('Component: FilmCardNavItem', () => {
  it('should render correctly', () => {
    const fakeLabel = 'Reviews';
    const fakeActiveItem = 'Details';
    const fakeSelectItem = jest.fn();

    render(<FilmCardNavItem label={fakeLabel} activeItem={fakeActiveItem} selectItem={fakeSelectItem} />);

    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });
});
