// Views Imports
import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import CreateModule from '../views/CreateModule';
import ModulesDashboard from '../views/ModulesDashboard';
import RegisterPayment from '../views/RegisterPayment';
import Users from '../views/Users';
import CreateUser from '../views/CreateUser';
import Roles from '../views/Roles';
import Scopes from '../views/Scopes';
import NotFound from '../views/Not_Found';

// Redirects
import RedirectToLogin from '../components/RedirectToLogin';
import RedirectToApp from '../components/RedirectToApp';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/login',
      component: isLogged ? RedirectToApp : Login,
      exact: true,
    },
    {
      exact: true,
      path: '/app',
      component: isLogged ? Dashboard : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/modules/create',
      component: isLogged ? CreateModule : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/modules/dashboard',
      component: isLogged ? ModulesDashboard : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/payment/register',
      component: isLogged ? RegisterPayment : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/management/users',
      component: isLogged ? Users : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/management/users/create',
      component: isLogged ? CreateUser : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/management/roles',
      component: isLogged ? Roles : RedirectToLogin,
    },
    {
      exact: true,
      path: '/app/management/scopes',
      component: isLogged ? Scopes : RedirectToLogin,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
