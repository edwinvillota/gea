import { MODULE_GET_ALL_REQUEST } from '../types';

const initialState = {
  loaded: false,
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MODULE_GET_ALL_REQUEST:
      return {
        ...state,
        loaded: true,
        list: action.list,
      };
    default:
      return state;
  }
}
