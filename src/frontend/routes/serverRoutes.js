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
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
