const initialState = {
  auth: {
    isLogged: false,
    user: {},
  },
  modules: {
    loaded: false,
    list: [
      {
        'module_id': 2,
        'name': 'Modulos',
        'route': '/modules',
        'icon': 'AiOutlineApi',
        'hasSubmodules': true,
        'description': 'Módulo de administración de módulos visuales de la aplicación.',
        'createdAt': '2020-04-11T03:39:15.000Z',
        'updatedAt': '2020-04-11T03:39:15.000Z',
        'submodules': [
          {
            'submodule_id': 2,
            'name': 'Crear modulo',
            'route': '/app/modules/create',
            'icon': 'AiOutlinePlus',
          },
          {
            'submodule_id': 3,
            'name': 'Eliminar módulo',
            'route': '/app/modules/delete',
            'icon': 'AiOutlineMinus',
          },
          {
            'submodule_id': 4,
            'name': 'Dashboard',
            'route': '/app/modules/dashboard',
            'icon': 'AiOutlineBuild',
          },
        ],
      },
    ],
  },
};

export default initialState;
