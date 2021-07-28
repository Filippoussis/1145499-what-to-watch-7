import React from 'react';
import {render, screen} from '@testing-library/react';

import FilmCardNav from './film-card-nav';

describe('Component: FilmCardNav', () => {
  it('should render correctly', () => {
    const fakeActiveItem = 'Details';
    const fakeSelectItem = jest.fn();
    const filmNavItemCount = 3;

    const {container} = render(<FilmCardNav activeItem={fakeActiveItem} selectItem={fakeSelectItem} />);

    expect(container.querySelectorAll('.film-nav__item').length).toBe(filmNavItemCount);
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });
});
