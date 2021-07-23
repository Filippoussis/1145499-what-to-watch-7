import {createReducer} from '@reduxjs/toolkit';
import {setUnexpectedError} from '../../actions/actions';

const initialState = {
  isUnexpectedError: null,
};

const errors = createReducer(initialState, (builder) => {
  builder
    .addCase(setUnexpectedError, (state, action) => {
      state.isUnexpectedError = action.payload;
    });
});

export {errors};
