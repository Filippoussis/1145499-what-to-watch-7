import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

import {createAPI} from '../services/api';
import {ActionCreator} from './actions/actions';
import {AuthorizationStatus} from '../const';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;
