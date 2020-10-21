import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Assets
import '../assets/styles/views/Roles.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import GenTable from '../components/GenTable';
import Button from '../components/Button';

// Actions
import { getAllRoles } from '../actions/rolesActions';

const Roles = ({ getAllRoles, roles }) => {

  useEffect(() => {
    getAllRoles();
  }, []);

  const { list } = roles;

  const handleDelete = (id) => {
  };

  const handleEdit = (id) => {
  };

  const data = list.map((rol) => {
    // eslint-disable-next-line no-param-reassign
    rol.delete = (<Button icon='AiOutlineDelete' onClick={() => handleDelete(rol.rol_id)} className='table__row--button delete' />);
    // eslint-disable-next-line no-param-reassign
    rol.edit = (<Button icon='AiOutlineEdit' onClick={() => handleEdit(rol.rol_id)} className='table__row--button edit' />);
    return rol;
  });

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <GenTable
          title='Roles Activos'
          headers={['Id', 'Nombre', 'Descripción', 'Fecha de Creación', '', '']}
          data={data}
          actions={[
            { name: 'Crear Rol', icon: 'AiOutlinePlus', route: '/app/management/roles/create' },
          ]}
        />
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => ({
  roles: state.roles,
});

const mapDispatchToProps = {
  getAllRoles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
