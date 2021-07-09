import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUIRED_AUTHORIZATION':
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {user};
