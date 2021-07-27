import React from 'react';
import {render, screen} from '@testing-library/react';

import ReviewSubmit from './review-submit';

describe('Component: ReviewSubmit', () => {
  it('should render correctly', () => {
    render(<ReviewSubmit isDisabledSubmit={false} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Post')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should disabled button', () => {
    render(<ReviewSubmit isDisabledSubmit />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
