import React from 'react';
import { connect } from 'react-redux';

// Assets

// Components
import GenTable from './GenTable';
import PaginationBar from './PaginationBar';
import SearchTableBar from './SearchTableBar';
import GenTableHeader from './GenTableHeader';

// Hook
import useTablePagination from '../hooks/useTablePagination';

// Actions
import { getAllUsers, getSearchUsers } from '../actions/usersActions';

const searchOptions = [
  { name: 'Usuario', value: 'username' },
  { name: 'Nombre', value: 'name' },
  { name: 'Apellido', value: 'lastname' },
  { name: 'Email', value: 'email' },
];

const UsersTable = ({ getAllUsers, getSearchUsers, users }) => {
  const { lim, list, total, requestPage, keyword, searchProp, setPage, setKeyword, setSearchProp } = useTablePagination(users, 1, 10, 'username', getAllUsers, getSearchUsers);

  return (
    <>
      <GenTableHeader
        title='Usuario Activos'
        actions={[
          { name: 'Crear Usuario', icon: 'AiOutlinePlus', route: '/app/management/users/create' },
        ]}
      />
      <SearchTableBar options={searchOptions} keyword={keyword} searchProp={searchProp} handleChangeKeyword={setKeyword} handleChangeProp={setSearchProp} />
      <GenTable
        headers={['Usuario', 'Nombres', 'Apellidos', 'Email', 'Fecha de Creación', 'Rol', '', '']}
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
