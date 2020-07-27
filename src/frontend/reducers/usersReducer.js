import {
  USER_GET_ALL_REQUEST,
  USER_CREATE_REQUEST,
  USER_SET_ERROR,
  USER_SET_LOADING,
} from '../types';

const initialState = {
  loaded: false,
  list: [],
  page: 1,
  total: 1,
  createdUser: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_GET_ALL_REQUEST:
      return {
        ...state,
        loaded: true,
        list: action.list,
        page: action.page,
        total: action.total,
      };
    case USER_CREATE_REQUEST:
      return {
        ...state,
        loaded: true,
        createdUser: action.createdUser,
        error: null,
      };
    case USER_SET_ERROR:
      return {
        ...state,
        loaded: true,
        createdUser: null,
        error: action.error,
      };
    case USER_SET_LOADING:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
};
