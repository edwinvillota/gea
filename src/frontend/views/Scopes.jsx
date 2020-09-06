/* eslint-disable no-param-reassign */
import React from 'react';

// Assets
import '../assets/styles/views/Scopes.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import ScopesTable from '../components/ScopesTable';

const Scopes = () => (
  <AppLayout>
    <div className='view__wrapper'>
      <ScopesTable />
    </div>
  </AppLayout>
);

export default Scopes;
