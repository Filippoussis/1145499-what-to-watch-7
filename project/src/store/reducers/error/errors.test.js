import {errors} from './errors';
import {ActionType} from '../../actions/actions';

describe('Reducer: errors', () => {
  it('without additional parameters should return initial state', () => {
    expect(errors(undefined, {}))
      .toEqual({isUnexpectedError: null});
  });

  it('setUnexpectedError', () => {
    const setUnexpectedErrorAction = {
      type: ActionType.SET_UNEXPECTED_ERROR,
      payload: true,
    };

    expect(errors({isUnexpectedError: null}, setUnexpectedErrorAction))
      .toEqual({isUnexpectedError: true});
  });
});
