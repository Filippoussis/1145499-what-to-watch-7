import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';
import {events} from './events/events';

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
