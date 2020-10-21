import { LPUSER_GET_REQUEST, LPUSER_LOADING_REQUEST } from '../types';

const initialState = {
  loaded: false,
  requestedLpUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LPUSER_GET_REQUEST:
      return {
        ...state,
        requestedLpUser: action.lpUser,
        loaded: false,
      };
    case LPUSER_LOADING_REQUEST:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

