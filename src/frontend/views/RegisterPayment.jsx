import React from 'react';

// Assets
import '../assets/styles/views/RegisterPayment.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import AppViewTitle from '../components/AppViewTitle';
import UserPayInput from '../components/UserPayInput';

const RegisterPayment = () => {
  return (
    <AppLayout>
      <div className='view__wrapper'>
        <AppViewTitle title='Registrar Pago' />
        <UserPayInput />
      </div>
    </AppLayout>
  );
};

export default RegisterPayment;
