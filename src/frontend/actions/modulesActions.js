/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API_URL } from '../utils/config';

// Types
import { MODULE_GET_ALL_REQUEST } from '../types';

export const createModule = ({ name, route, icon, hasSubmodules, description }) => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/modules`,
      method: 'post',
      data: {
        name,
        route,
        icon,
        hasSubmodules,
        description,
      },
    };

    axios(config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllModulesRequest = (list) => {
  return {
    type: MODULE_GET_ALL_REQUEST,
    list,
  };
};

export const getAllModules = () => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/modules`,
      method: 'get',
    };

    axios(config)
      .then(({ data }) => {
        dispatch(getAllModulesRequest(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

