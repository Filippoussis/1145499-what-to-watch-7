import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FilmCardReviews from './film-card-reviews';

let store = null;
const mockStore = configureStore({});

describe('Component: FilmCardReviews', () => {
  it('should render correctly', () => {
    store = mockStore({
      DATA: {
        comments: [
          {
            id: 1,
            user: {
              id: 4,
              name: 'Kate Muir',
            },
            rating: 8.9,
            comment: 'Discerning travellers and Wes Anderson...',
            date: '2019-05-08T14:13:56.569Z',
          },
          {
            id: 2,
            user: {
              id: 5,
              name: 'John Golt',
            },
            rating: 8.9,
            comment: 'Very good',
            date: '2019-05-08T14:13:56.569Z',
          },
        ],
      },
    });

    const reviewsColCount = 2;

    const {container} = render(
      <Provider store={store}>
        <FilmCardReviews />
      </Provider>,
    );

    expect(screen.getByText('Discerning travellers and Wes Anderson...')).toBeInTheDocument();
    expect(screen.getByText('John Golt')).toBeInTheDocument();
    expect(container.querySelectorAll('.film-card__reviews-col').length).toBe(reviewsColCount);
  });

  it('should render correctly 0 comments', () => {
    store = mockStore({
      DATA: {
        comments: [],
      },
    });

    const reviewsColCount = 0;

    const {container} = render(
      <Provider store={store}>
        <FilmCardReviews />
      </Provider>,
    );

    expect(container.querySelectorAll('.film-card__reviews-col').length).toBe(reviewsColCount);
  });
});
