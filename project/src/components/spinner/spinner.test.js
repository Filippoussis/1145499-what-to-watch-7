import React from 'react';
import {render, screen} from '@testing-library/react';
import Spinner from './spinner';

test('Spinner', () => {
  render(<Spinner />);
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});
