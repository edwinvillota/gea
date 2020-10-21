import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import UsersReducer from './usersReducer';
import RolesReducer from './rolesReducer';
import ScopesReducer from './scopesReducer';
import ModulesReducer from './modulesReducer';
import LpUsersReducer from './lpUsersReducer';

const geaReducers = combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
  roles: RolesReducer,
  scopes: ScopesReducer,
  modules: ModulesReducer,
  lpUsers: LpUsersReducer,
});

export default geaReducers;
