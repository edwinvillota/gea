import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views Imports
import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import CreateModule from '../views/CreateModule';
import ModulesDashboard from '../views/ModulesDashboard';
import NotFound from '../views/Not_Found';

// Redirects
import RedirectToLogin from '../components/RedirectToLogin';
import RedirectToApp from '../components/RedirectToApp';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        exact
        path='/login'
        component={isLogged ? RedirectToApp : Login}
      />
      <Route
        exact
        path='/app'
        component={isLogged ? Dashboard : RedirectToLogin}
      />
      <Route
        exact
        path='/app/modules/create'
        component={isLogged ? CreateModule : RedirectToLogin}
      />
      <Route
        exact
        path='/app/modules/dashboard'
        component={isLogged ? ModulesDashboard : RedirectToLogin}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
