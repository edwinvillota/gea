import React from 'react';
import { connect } from 'react-redux';

// Assets

// Components
import GenTable from './GenTable';
import PaginationBar from './PaginationBar';
import SearchTableBar from './SearchTableBar';

// Hook
import useTablePagination from '../hooks/useTablePagination';

// Actions
import { getAllUsers, getSearchUsers } from '../actions/usersActions';

const searchOptions = [
  { name: 'Usuario', value: 'username' },
  { name: 'Nombre', value: 'name' },
  { name: 'Apellido', value: 'lastname' },
  { name: 'Email', value: 'email' },
  { name: 'Rol', value: 'rol' },
];

const UsersTable = ({ getAllUsers, getSearchUsers, users }) => {
  const { lim, list, total, requestPage, keyword, setPage, setKeyword } = useTablePagination(users, 1, 10, getAllUsers, getSearchUsers);

  return (
    <>
      <SearchTableBar options={searchOptions} keyword={keyword} handleChangeKeyword={setKeyword} />
      <GenTable
        title='Usuario Activos'
        headers={['Usuario', 'Nombres', 'Apellidos', 'Email', 'Fecha de Creación', 'Rol', '', '']}
        actions={[
          { name: 'Crear Usuario', icon: 'AiOutlinePlus', route: '/app/management/users/create' },
        ]}
        ignore={['user_id']}
        data={list}
      />
      <PaginationBar page={requestPage} handleChangePage={setPage} total={total} limit={lim} />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  getAllUsers,
  getSearchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
