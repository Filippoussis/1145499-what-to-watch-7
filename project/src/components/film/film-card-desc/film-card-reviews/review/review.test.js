import React from 'react';
import {render, screen} from '@testing-library/react';
import Review from './review';

test('correctly rendered Review', () => {
  const mockData = {
    id: 2,
    user: {
      id: 5,
      name: 'Gilfoy',
    },
    rating: 7.7,
    comment: 'This is not the same Cruella!',
    date: '2019-05-08T14:13:56.569Z',
  };

  render(<Review review={mockData} />);

  expect(screen.getByText('This is not the same Cruella!')).toBeInTheDocument();
  expect(screen.getByText('May 08, 2019')).toBeInTheDocument();
  expect(screen.getByText('Gilfoy')).toBeInTheDocument();
  expect(screen.getByText('7,7')).toBeInTheDocument();
});
