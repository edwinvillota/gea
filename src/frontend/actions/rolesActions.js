/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../utils/config';

// Types
import { ROL_GET_ALL_REQUEST } from '../types';

export const getAllRolesRequest = (list) => {
  return {
    type: ROL_GET_ALL_REQUEST,
    list,
  };
};

export const getAllRoles = () => {
  return (dispatch) => {
    const config = {
      url: `${API_URL}/api/management/roles`,
      method: 'get',
    };

    axios(config)
      .then(({ data }) => {

        const cleanData = data.data.map((rol) => {
          // eslint-disable-next-line no-param-reassign
          rol.createdAt = moment(rol.createdAt).format('DD-MM-YY hh:mm A');
          return rol;
        });

        dispatch(getAllRolesRequest(cleanData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
