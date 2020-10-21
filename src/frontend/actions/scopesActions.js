/* eslint-disable no-param-reassign */
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../utils/config';

// Types
import { SCOPE_GET_ALL_REQUEST } from '../types/index';

export const getAllScopesRequest = (list, page, total) => {
  return {
    type: SCOPE_GET_ALL_REQUEST,
    list,
    page,
    total,
  };
};

export const getAllScopes = (page = 1) => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/scopes/${page}`,
      method: 'get',
    };

    axios(config)
      .then(({ data }) => {

        const cleanData = data.data.map((scope) => {
          // eslint-disable-next-line no-param-reassign
          scope.createdAt = moment(scope.createdAt).format('DD-MM-YY hh:mm A');
          return scope;
        });

        dispatch(getAllScopesRequest(cleanData, data.page, data.total));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSearchScopes = (params = [], page = 1) => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/scopes/search`,
      method: 'post',
      data: {
        params,
        page,
      },
    };

    axios(config)
      .then(({ data }) => {
        const cleanData = data.data.map(((scope) => {
          scope.createdAt = moment(scope.createdAt).format('DD-MM-YY hh:mm A');
          return scope;
        }));

        dispatch(getAllScopesRequest(cleanData, data.page, data.total));
      })
      .catch((err) => {
        console.log(err);
      });

  };
};
