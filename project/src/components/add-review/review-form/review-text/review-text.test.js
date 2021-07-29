import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReviewText from './review-text';

describe('Component: ReviewText', () => {
  it('should render correctly', () => {
    render(<ReviewText isDisabledSubmit={false} isDisabled={false} />);

    expect(screen.getByPlaceholderText('Review text')).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText('Review text'), 'Very good film!');
    expect(screen.getByDisplayValue('Very good film!')).toBeInTheDocument();
  });
});
