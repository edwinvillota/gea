import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import Reducers from './reducers';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhancers;

  if (process.env.NODE_ENV === 'production') composeEnhancers = compose;
  else composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const preloadedState = window.__PRELOADED_STATE__;
  const history = createBrowserHistory();
  const store = createStore(Reducers, preloadedState, composeEnhancers(applyMiddleware(thunk)));

  delete window.__PRELOADED_STATE__;

  const token = document.cookie.match(new RegExp('(^| )token=([^;]+)'));

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token[2]}`;
  }

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App isLogged={preloadedState.auth.isLogged} />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
