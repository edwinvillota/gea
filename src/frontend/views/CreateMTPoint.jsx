import React from 'react';

// Assets

// Layout
import AppLayout from '../layouts/AppLayout';

// Components
import AppViewTitle from '../components/AppViewTitle';
import CreateMTPointForm from '../components/CreateMTPointForm';
import MTMapViewer from '../components/MTMapViewer';

const CreateMTPoint = () => {

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <AppViewTitle title='Replanteo Media Tensión' />
        <MTMapViewer />
        <CreateMTPointForm />
      </div>
    </AppLayout>
  );

};

export default CreateMTPoint;
