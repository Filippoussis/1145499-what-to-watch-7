import React from 'react';
import {render, screen} from '@testing-library/react';

import ErrorMessage from './error-message';

test('ErrorMessage', () => {
  render(<ErrorMessage />);
  expect(screen.getByText('Упс! Кажется что-то пошло не так. Пожалуйста, проверьте соединение и попробуйте снова.'))
    .toBeInTheDocument();
});
