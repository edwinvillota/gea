import React from 'react';

// Assets
import '../assets/styles/views/CreateUser.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import NewUserForm from '../components/NewUserForm';

const CreateUser = () => {

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <NewUserForm />
      </div>
    </AppLayout>
  );
};

export default CreateUser;
