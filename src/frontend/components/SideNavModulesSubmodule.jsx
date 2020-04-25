import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../assets/styles/components/SideNavModulesSubroute.scss';

// Components
import Icon from './Icon';

const SideNavModulesSubroute = ({ submodule }) => (
  <Link className='sidenav__subroute--wrapper' to={submodule.route}>
    <Icon
      className='subroute__icon'
      name={submodule.icon}
    />
    <h4 className='subroute__name'>
      {submodule.name}
    </h4>
    <Icon
      className='subroute__action--icon'
      name='AiOutlineRight'
    />
  </Link>
);

export default SideNavModulesSubroute;
