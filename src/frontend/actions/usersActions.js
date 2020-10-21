/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../utils/config';

// Types
import {
  USER_GET_ALL_REQUEST,
  USER_CREATE_REQUEST,
  USER_SET_ERROR,
  USER_SET_LOADING,
} from '../types';

// General
export const setUserError = (error, message) => {
  return {
    type: USER_SET_ERROR,
    error: { error, message },
  };
};

export const setUserLoading = () => {
  return {
    type: USER_SET_LOADING,
  };
};

// Get users
export const getAllUsersRequest = (list, page, total) => {
  return {
    type: USER_GET_ALL_REQUEST,
    list,
    page,
    total,
  };
};

export const getAllUsers = (page = 1) => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/users/${page}`,
      method: 'get',
    };

    axios(config)
      .then(({ data }) => {
        const cleanData = data.data.map((user) => {
          user.createdAt = moment(user.createdAt).format('DD-MM-YY hh:mm A');
          user.rol = user.rol.name;
          return user;
        });
        dispatch(getAllUsersRequest(cleanData, data.page, data.total));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSearchUsers = (params = [], page = 1) => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/users/search`,
      method: 'post',
      data: {
        params,
        page,
      },
    };

    axios(config)
      .then(({ data }) => {
        const cleanData = data.data.map((user) => {
          user.createdAt = moment(user.createdAt).format('DD-MM-YY hh:mm A');
          user.rol = user.rol.name;
          return user;
        });
        dispatch(getAllUsersRequest(cleanData, data.page, data.total));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Create user

export const createUserRequest = (createdUser) => {
  return {
    type: USER_CREATE_REQUEST,
    createdUser,
  };
};

export const createUser = ({ username, name, lastname, email, password, job_title_id, rol_id }) => {
  return (dispatch) => {

    dispatch(setUserLoading());

    const config = {
      url: `${API_URL}/api/management/users`,
      method: 'post',
      data: {
        username,
        name,
        lastname,
        email,
        password,
        job_title_id,
        rol_id,
      },
    };

    axios(config)
      .then(({ data }) => {
        dispatch(createUserRequest(data.data[0]));
      })
      .catch((e) => {
        dispatch(setUserError(e, 'Ocurrio un error al tratar de crear el usuario'));
      });
  };
};
