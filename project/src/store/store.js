import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

import {createAPI} from '../services/api';
import {requireAuthorization} from './actions/actions';
import {AuthorizationStatus} from '../const';
import {redirect} from './middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api), redirect));

export default store;
