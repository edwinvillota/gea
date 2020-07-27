/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API_URL } from '../utils/config';

// Types
import { LPUSER_GET_REQUEST, LPUSER_LOADING_REQUEST } from '../types';

export const getLpUserRequest = (lpUser) => {
  return {
    type: LPUSER_GET_REQUEST,
    lpUser,
  };
};

export const lpUserLoadingRequest = () => {
  return {
    type: LPUSER_LOADING_REQUEST,
  };
};

export const getLpUser = (code) => {
  return (dispatch) => {
    dispatch(lpUserLoadingRequest());
    const config = {
      url: `${API_URL}/api/dbs/lpusers/${code}`,
      method: 'get',
    };

    axios(config)
      .then(({ data }) => {
        dispatch(getLpUserRequest(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
