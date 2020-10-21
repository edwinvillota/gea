import React from 'react';

// Assets
import '../assets/styles/components/AppViewTitle.scss';

const AppViewTitle = ({ title }) => (
  <>
    <h1 className='AppView__title'>
      {`${title}`}
    </h1>
  </>
);

export default AppViewTitle;
