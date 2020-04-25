import React from 'react';

// Assets
import '../assets/styles/components/AppViewTitle.scss';

const AppViewTitle = ({ title, subtitle = false }) => (
  <>
    <h1 className='AppView__title'>
      {`${title}`}
    </h1>
    {
      subtitle ?
        (
          <h2 className='AppView__subtitle'>
            {`${subtitle}`}
          </h2>
        ) :
        (null)
    }
  </>
);

export default AppViewTitle;
