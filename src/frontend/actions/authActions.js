import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SET_AUTH_ERROR,
} from '../types';

export const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  user,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  error,
});

export const loginUser = ({ username, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        const { user } = data;
        document.cookie = `username=${user.username}`;
        document.cookie = `id=${user.user_id}`;
        document.cookie = `email=${user.email}`;
        document.cookie = `rol_id=${user.rol_id}`;
        document.cookie = `scopes=${user.scopes}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((e) => {
        dispatch(setAuthError(e.response.data));
      });
  };
};

