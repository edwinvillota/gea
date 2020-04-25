import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import SideNav from '../../components/SideNav';
import ProviderMock from '../../__mocks__/providerMock';

describe('<SideNav />', () => {
  test('Sidenav have main wrapper', () => {
    const sidenav = mount(
      <ProviderMock>
        <SideNav />
      </ProviderMock>
    );
    expect(sidenav.find('.sidenav__main--wrapper')).toHaveLength(1);
  });

  test('Sidenav snapshot', () => {
    const sidenav = create(
      <ProviderMock>
        <SideNav />
      </ProviderMock>
    );
    expect(sidenav.toJSON()).toMatchSnapshot();
  });
});
