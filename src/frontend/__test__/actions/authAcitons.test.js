import { loginRequest } from '../../actions/authActions';
import { LOGIN_REQUEST } from '../../types';

describe('Authentication Actions', () => {
  test('Login', () => {
    const user = {
      username: 'test',
      password: 'adsf',
    };

    const expectedAction = {
      type: LOGIN_REQUEST,
      user,
    };

    expect(loginRequest(user)).toEqual(expectedAction);
  });
});