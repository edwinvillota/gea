/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// Assets
import '../assets/styles/views/Scopes.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import Gentable from '../components/GenTable';
import PaginationBar from '../components/PaginationBar';
import Button from '../components/Button';

// Actions
import { getAllScopes } from '../actions/scopesActions';

const Scopes = ({ getAllScopes, scopes }) => {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const { list, page: requestPage, total } = scopes;

  useEffect(() => {
    getAllScopes();
  }, []);

  useEffect(() => {
    if (page !== requestPage) {
      getAllScopes(page);
    }
  });

  const handleDelete = (id) => {
    alert('Eliminando Scope');
  };

  const handleEdit = (id) => {
    alert('Editando Scope');
  };

  const data = list.map((scope) => {
    scope.delete = (<Button icon='AiOutlineDelete' onClick={() => handleDelete(scope.scope_id)} className='table__row--button delete' />);
    scope.edit = (<Button icon='AiOutlineEdit' onClick={() => handleEdit(scope.scope_id)} className='table__row--button edit' />);
    return scope;
  });

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <Gentable
          title='Scopes Activos'
          headers={['Id', 'Nombre', 'Tipo', 'Recurso', 'Fecha de Creación']}
          actions={[
            { name: 'Crear Scope', icon: 'AiOutlinePlus', route: '/app/management/scopes/create' },
          ]}
          data={data}
        />
        <PaginationBar page={requestPage} handleChangePage={setPage} total={total} limit={limit} />
      </div>
    </AppLayout>
  );
};

const mapStateToProps = (state) => ({
  scopes: state.scopes,
});

const mapDispatchToProps = {
  getAllScopes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scopes);
