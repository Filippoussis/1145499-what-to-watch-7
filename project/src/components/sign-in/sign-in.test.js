import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';

const mockStore = configureStore({});

describe('Component: SignIn', () => {
  it('should render "SignIn" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'user@gmail.com');
    userEvent.type(screen.getByTestId('password'), '12345');

    expect(screen.getByDisplayValue(/user@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/12345/i)).toBeInTheDocument();
  });
});
