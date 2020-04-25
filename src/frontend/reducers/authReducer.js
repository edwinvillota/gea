import { LOGIN_REQUEST, LOGOUT_REQUEST, SET_AUTH_ERROR } from '../types';

const initialState = {
  isLogged: false,
  user: {},
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
