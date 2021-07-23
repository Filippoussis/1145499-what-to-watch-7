import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/root-reducer';

import {createAPI} from '../services/api';
import {requireAuthorization, setUnexpectedError} from './actions/actions';
import {AuthorizationStatus} from '../const';
import {redirect} from './middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
  () => store.dispatch(setUnexpectedError(false)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
