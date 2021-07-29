import React from 'react';
import {render, screen} from '@testing-library/react';

import ReviewRating from './review-rating';

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {

    render(<ReviewRating currentRating={'5'} isDisabled={false} />);

    expect(screen.getAllByRole('radio').length).toBe(10);
  });
});
