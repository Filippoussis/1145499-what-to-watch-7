import React from 'react';
import {render, screen} from '@testing-library/react';

import RatingStar from './rating-star';

describe('Component: RatingStar', () => {
  it('should render correctly', () => {

    render(<RatingStar starValue={'5'} currentRating={'5'} />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Rating 5')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('should not toBeChecked', () => {

    render(<RatingStar starValue={'5'} currentRating={'7'} />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Rating 5')).toBeInTheDocument();
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

});
