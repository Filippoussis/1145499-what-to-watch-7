import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {ActionType} from '../../store/actions/actions';

import Player from './player';

let store = null;
let history = null;

describe('Component: Player', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore({});
    store = mockStore({
      DATA: {film: {data: {}, loaded: true}},
    });
  });

  it('should render correctly', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const controlsCount = 3;

    render(
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('button').length).toBe(controlsCount);
    expect(useDispatch).toBeCalledTimes(1);
  });
});
