/* eslint-disable no-param-reassign */
import React from 'react';

// Assets
import '../assets/styles/views/Users.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import UsersTable from '../components/UsersTable';

const Users = () => {
  return (
    <AppLayout>
      <div className='view__wrapper'>
        <UsersTable />
      </div>
    </AppLayout>
  );
};

export default Users;
