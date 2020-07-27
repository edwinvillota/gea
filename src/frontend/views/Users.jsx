/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Assets
import '../assets/styles/views/Users.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import GenTable from '../components/GenTable';
import PaginationBar from '../components/PaginationBar';
import Button from '../components/Button';

// Actions
import { getAllUsers } from '../actions/usersActions';

const Users = ({ getAllUsers, users }) => {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const { list, page: requestPage, total } = users;

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (page !== requestPage) {
      getAllUsers(page);
    }
  }, [page]);

  const handleDelete = (id) => {
    alert('Eliminando usuario');
  };

  const handleEdit = (id) => {
    alert('Editando Usuario');
  };

  const data = list.map((user) => {
    user.delete = (<Button icon='AiOutlineDelete' onClick={() => handleDelete(user.user_id)} className='table__row--button delete' />);
    user.edit = (<Button icon='AiOutlineEdit' onClick={() => handleEdit(user.user_id)} className='table__row--button edit' />);
    return user;
  });

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <GenTable
          title='Usuarios Activos'
          headers={['Usuario', 'Nombres', 'Apellidos', 'Email', 'Fecha de Creación', 'Rol', '', '']}
          actions={[
            { name: 'Crear Usuario', icon: 'AiOutlinePlus', route: '/app/management/users/create' },
          ]}
          ignore={['user_id']}
          data={data}
        />
        <PaginationBar page={requestPage} handleChangePage={setPage} total={total} limit={limit} />
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
