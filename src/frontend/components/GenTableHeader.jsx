import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../assets/styles/components/GenTableHeader.scss';

// Components
import Icon from './Icon';

const GenTableHeader = ({ title, actions }) => {
  return (
    <div className='gtheader__container'>
      <h1 className='gtheader__title'>
        {title}
      </h1>
      <div className='header__actions'>
        {
          actions ?
            (actions.map((a) => (
              <Link key={a.name} to={a.route} className='action'>
                <Icon name={a.icon} className='action__icon' />
                <span>{a.name}</span>
              </Link>
            ))) :
            (null)
        }
      </div>
    </div>
  );
};

export default GenTableHeader;
