import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsCol from './reviews-col';

test('correctly rendered ReviewsCol', () => {
  const mockData = [
    {
      id: 1,
      user: {
        id: 7,
        name: 'Dinesh',
      },
      rating: 9.9,
      comment: 'Сool costumes!',
      date: '2019-05-09T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 5,
        name: 'Gilfoy',
      },
      rating: 7.7,
      comment: 'This is not the same Cruella!',
      date: '2019-05-08T14:13:56.569Z',
    },
  ];

  render(<ReviewsCol comments={mockData} />);

  expect(screen.getByText('This is not the same Cruella!')).toBeInTheDocument();
  expect(screen.getByText('Gilfoy')).toBeInTheDocument();
  expect(screen.getByText('Сool costumes!')).toBeInTheDocument();
  expect(screen.getByText('Dinesh')).toBeInTheDocument();
});
