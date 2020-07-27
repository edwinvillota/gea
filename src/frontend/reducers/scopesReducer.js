import { SCOPE_GET_ALL_REQUEST } from '../types';

const initialState = {
  loaded: false,
  list: [],
  page: 1,
  total: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCOPE_GET_ALL_REQUEST:
      return {
        ...state,
        loaded: true,
        list: action.list,
        page: action.page,
        total: action.total,
      };
    default:
      return state;
  }
};
