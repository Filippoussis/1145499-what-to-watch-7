import {combineReducers} from 'redux';
import {filmsData} from './films-data';
import {user} from './user';
import {events} from './events';

export const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
  EVENT: 'EVENT',
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.USER]: user,
  [NameSpace.EVENT]: events,
});
