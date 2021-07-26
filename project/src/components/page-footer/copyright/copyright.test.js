import React from 'react';
import {render, screen} from '@testing-library/react';
import Copyright from './copyright';

test('correctly rendered PageFooter', () => {
  render(<Copyright />);
  expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
});
