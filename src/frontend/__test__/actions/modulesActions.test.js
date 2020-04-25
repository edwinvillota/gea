import { getAllModulesRequest } from '../../actions/modulesActions';
import { MODULE_GET_ALL_REQUEST } from '../../types/index';
import ModuleMock from '../../__mocks__/moduleMock';

describe('Modules actions', () => {
  test('Get All Modules', () => {
    const list = [ModuleMock];
    const expectedAction = {
      type: MODULE_GET_ALL_REQUEST,
      list,
    };
    expect(getAllModulesRequest(list)).toEqual(expectedAction);
  });
});
