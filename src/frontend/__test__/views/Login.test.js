import React from 'react';
import { mount } from 'enzyme';
import Login from '../../views/Login';
import ProviderMock from '../../__mocks__/providerMock';

describe('<Login />', () => {
  test('Login Form', () => {
    const preventDefault = jest.fn();
    const login = mount(
      <ProviderMock>
        <Login />
      </ProviderMock>
    );
    login.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    login.unmount();
  });
});
