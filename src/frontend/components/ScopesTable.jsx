import React from 'react';
import { connect } from 'react-redux';

// Components
import GenTable from './GenTable';
import PaginationBar from './PaginationBar';
import SearchTableBar from './SearchTableBar';
import GenTableHeader from './GenTableHeader';

// Hooks
import useTablePagination from '../hooks/useTablePagination';

// Actions
import { getAllScopes, getSearchScopes } from '../actions/scopesActions';

const searchOptions = [
  { name: 'Nombre', value: 'name' },
  { name: 'Tipo', value: 'type' },
  { name: 'Recurso', value: 'resource' },
];

const ScopesTable = ({ getAllScopes, getSearchScopes, scopes }) => {
  const { lim, list, total, requestPage, keyword, searchProp, setPage, setKeyword, setSearchProp } = useTablePagination(scopes, 1, 10, 'name', getAllScopes, getSearchScopes);

  return (
    <>
      <GenTableHeader
        title='Scopes Activos'
        actions={[
          { name: 'Crear Scope', icon: 'AiOutlinePlus', route: '/app/management/scopes/create' },
        ]}
      />
      <SearchTableBar options={searchOptions} keyword={keyword} searchProp={searchProp} handleChangeKeyword={setKeyword} handleChangeProp={setSearchProp} />
      <GenTable
        headers={['Id', 'Nombre', 'Tipo', 'Recurso', 'Fecha de Creación', '', '']}
        ignore={[]}
        data={list}
      />
      <PaginationBar page={requestPage} handleChangePage={setPage} total={total} limit={lim} />
    </>
  );
};

const mapStateToProps = (state) => ({
  scopes: state.scopes,
});

const mapDispatchToProps = {
  getAllScopes,
  getSearchScopes,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScopesTable);
