import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Assets
import '../assets/styles/components/Button.scss';

// Components
import Icon from './Icon';

const Button = ({ text = '', icon, background = 'transparent', foreground = 'black', onClick, className }) => {

  const [pulsed, setPulsed] = useState(0);

  const props = useSpring({ x: pulsed ? 1 : 0 });

  const handleClick = () => {
    setPulsed(!pulsed);
    if (onClick) {
      onClick();
    }
  };

  return (
    <animated.button
      type='button'
      style={{
        // eslint-disable-next-line react/destructuring-assignment
        transform: props.x
          .interpolate({
            range: [0, 0.25, 0.5, 0.75, 1],
            output: [1, 0.7, 0.8, 0.9, 1],
          })
          .interpolate((x) => `scale(${x})`),
        backgroundColor: background,
        color: foreground,
      }}
      onClick={handleClick}
      className={`custom__button--button ${className}`}
    >
      { icon && (<Icon name={icon} className='custom__button--icon' />)}
      {text && (<span className='custom__button--text'>{text}</span>)}
    </animated.button>
  );
};

export default Button;
