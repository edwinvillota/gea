import React from 'react';

// Assets
import '../assets/styles/views/CreateModule.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import NewModuleForm from '../components/NewModuleForm';
import AppViewTitle from '../components/AppViewTitle';

const CreateModule = () => {

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <AppViewTitle title='Crear Módulos' subtitle='Crear Módulos Visuales' />
        <NewModuleForm />
      </div>
    </AppLayout>
  );
};

export default CreateModule;
