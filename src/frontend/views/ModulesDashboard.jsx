import React from 'react';

// Assets
import '../assets/styles/views/ModulesDashboard.scss';

// Layout
import AppLayout from '../layouts/AppLayout';
import AppViewTitle from '../components/AppViewTitle';

// Components
import ModulesViewer from '../components/ModulesViewer';

const ModulesDashboard = () => {
  return (
    <AppLayout>
      <div className='view__wrapper'>
        <AppViewTitle title='Modulos' subtitle='Administración de módulos.' />
        <ModulesViewer />
      </div>
    </AppLayout>
  );
};

export default ModulesDashboard;
