import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

// Assets
import '../assets/styles/components/ModuleCard.scss';

// Config
import { theme } from '../utils/config';

// Components
import Icon from './Icon';
import Button from './Button';

const ModuleCard = ({ module }) => {

  const [expanded, setExpanded] = useState(0);
  const { name, icon, description, hasSubmodules, submodules } = module;

  const mainSpring = useSpring({ x: expanded ? 1 : 0 });
  const subSpring = useSpring({
    opacity: expanded ? 1 : 0,
    transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
  });

  const handleExpandedSubmodules = () => {
    setExpanded(!expanded);
  };

  const handleDeleteModule = () => {
    alert(`Eliminaste el módulo ${module.name}.`);
  };

  return (
    <animated.div
      className='module__card--wrapper'
      style={{
        height: mainSpring.x
          .interpolate({
            range: [0, 1],
            output: [300, 500],
          })
          .interpolate((x) => `${x}px`),
      }}
    >
      <div className='card__header--wrapper'>
        <Icon name={icon} className='card__header--icon' />
        <h2 className='card__header--title'>{name}</h2>
      </div>
      <div className='card__content--wrapper'>
        <h2 className='card__content--title'>Descripción</h2>
        <p className='card__content--description'>
          {description}
        </p>
      </div>
      <animated.div
        className='card__submodules--wrapper'
        style={subSpring}
      >
        <h2 className='card__submodules--title'>Submodulos</h2>
        {
          (hasSubmodules && submodules) ?
            (
              submodules.map((sm) => (
                <div key={sm.submodule_id} className='card__submodule--wrapper'>
                  <span className='card__submodule--name'>{sm.name}</span>
                  <span className='card__submodule--route'>{sm.route}</span>
                </div>
              ))
            ) :
            (null)
        }
      </animated.div>
      <div className='card__actions--wrapper'>
        <Button icon='AiOutlineDelete' foreground={theme.colors.$Error} onClick={handleDeleteModule} className='card__actions--button' />
        <Button icon='FaRegEdit' foreground={theme.colors.$Mid_gray} className='card__actions--button' />
        <Button icon='AiOutlineApi' foreground={theme.colors.$Accent} className='card__actions--button' />
        {
          (hasSubmodules && submodules.length) ?
            (<Button icon={expanded ? 'AiOutlineUp' : 'AiOutlineDown'} foreground={theme.colors.$Mid_gray} className='actions__expand--button' onClick={handleExpandedSubmodules} />) :
            (null)
        }
      </div>
    </animated.div>
  );
};

export default ModuleCard;
