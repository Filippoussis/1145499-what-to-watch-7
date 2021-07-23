import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';
import {events} from './events/events';
import {errors} from './error/errors';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
  EVENT: 'EVENT',
  ERROR: 'ERROR',
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.USER]: user,
  [NameSpace.EVENT]: events,
  [NameSpace.ERROR]: errors,
});
