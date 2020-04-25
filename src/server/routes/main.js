/* eslint-disable camelcase */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/serverRoutes';
import Reducer from '../../frontend/reducers/index';
import Render from '../render';

require('dotenv').config();

const main = async (req, res, next) => {
  try {
    let initialState;

    try {
      const { username, email, id, rol_id, token, scopes } = req.cookies;

      let user = {};
      let isLogged = false;

      if (username && id) {

        let modules = [];

        if (token) {
          modules = await axios({
            url: `${process.env.API_URL}/api/management/rolModules/${rol_id}`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
          });
        }

        user = {
          id,
          username,
          email,
          modules: modules.data || [],
          scopes: scopes.split(','),
        };
        isLogged = true;
      }

      initialState = {
        auth: {
          isLogged,
          user,
        },
      };

    } catch (err) {
      initialState = {
        auth: {
          user: {},
        },
      };
      console.log(err);
    }

    const context = {};

    const isLogged = (initialState.auth.user.id);
    const store = createStore(Reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          {renderRoutes(Routes(isLogged))}
        </StaticRouter>
      </Provider>,
    );

    const preloadedState = store.getState();
    res.send(Render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
