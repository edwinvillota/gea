import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Views Imports
import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import CreateModule from '../views/CreateModule';
import ModulesDashboard from '../views/ModulesDashboard';
import NotFound from '../views/Not_Found';
import RegisterPayment from '../views/RegisterPayment';
import Users from '../views/Users';
import Roles from '../views/Roles';
import Scopes from '../views/Scopes';
import CreateUser from '../views/CreateUser';

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
      <Route
        exact
        path='/app/payment/register'
        component={isLogged ? RegisterPayment : RedirectToLogin}
      />
      <Route
        exact
        path='/app/management/users'
        component={isLogged ? Users : RedirectToLogin}
      />
      <Route
        exact
        path='/app/management/users/create'
        component={isLogged ? CreateUser : RedirectToLogin}
      />
      <Route
        exact
        path='/app/management/roles'
        component={isLogged ? Roles : RedirectToLogin}
      />
      <Route
        exact
        path='/app/management/scopes'
        component={isLogged ? Scopes : RedirectToLogin}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
