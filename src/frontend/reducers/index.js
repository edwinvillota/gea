import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ModulesReducer from './modulesReducer';

const geaReducers = combineReducers({
  auth: AuthReducer,
  modules: ModulesReducer,
});

export default geaReducers;
