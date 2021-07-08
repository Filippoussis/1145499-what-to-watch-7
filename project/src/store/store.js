import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

import {createAPI} from '../services/api';
import {requireAuthorization} from './actions/actions';
import {AuthorizationStatus} from '../const';
import {redirect} from './middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api), redirect));

export default store;
