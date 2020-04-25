import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// Assets
import '../assets/styles/components/SideNavModule.scss';

// Components
import Icon from './Icon';
import SideNavModulesSubmodule from './SideNavModulesSubmodule';

const SideNavModule = ({ module, handleAction }) => {

  const [expanded, setExpand] = useState(false);

  const handleChangeExpand = (event) => {
    setExpand(event.target.checked);
  };

  if (!module.hasSubmodules) {
    return (
      <Link
        className='module__wrapper'
        to={module.route}
        onClick={handleAction || (() => {})}
      >
        <Icon
          name={module.icon}
          className='module__icon'
        />
        <h3 className='module__name'>
          {module.name}
        </h3>
        <Icon
          name='AiOutlineRight'
          className='expand__icon'
        />
      </Link>
    );
  }
  return (
    <div className='module__subroutes--wrapper'>
      <div className='main__module--route'>
        <Icon
          name={module.icon}
          className='module__icon'
        />
        <h3 className='module__name'>
          {module.name}
        </h3>
        <input type='checkbox' className='expand__checkbox' id={`expand__label--${module.name}`} onChange={handleChangeExpand} />
        <label htmlFor={`expand__label--${module.name}`} className='expand__label'>
          <Icon
            name='AiOutlineDown'
            className='expand__icon'
          />
        </label>
      </div>
      <div className={classnames('subroutes__module--wrapper', { 'subroutes__expanded': expanded })}>
        {
          module.submodules.map((sm) => (
            <SideNavModulesSubmodule key={sm.name} submodule={sm} />
          ))
        }
      </div>
    </div>
  );

};

export default SideNavModule;
