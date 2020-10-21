import React from 'react';

// Assets
import '../assets/styles/views/CreateUser.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import NewUserForm from '../components/NewUserForm';
import AppViewTitle from '../components/AppViewTitle';

const CreateUser = () => {

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <AppViewTitle title='Crear nuevo usuario' />
        <NewUserForm />
      </div>
    </AppLayout>
  );
};

export default CreateUser;
