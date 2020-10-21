import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Assets
import '../assets/styles/components/Button.scss';

// Components
import Icon from './Icon';

const Button = ({ text = '', icon, background = 'transparent', foreground = 'black', onClick, className, iconClassName = 'custom__button--icon', loading = false, ...all }) => {

  const [pulsed, setPulsed] = useState(0);

  const spring = useSpring({ x: pulsed ? 1 : 0 });

  const handleClick = () => {
    setPulsed(!pulsed);
    if (onClick) {
      onClick();
    }
  };

  return (
    <animated.button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...all}
      type='button'
      style={{
        // eslint-disable-next-line react/destructuring-assignment
        transform: spring.x
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
      {loading && (<Icon name='AiOutlineLoading' className={`${iconClassName} custom__button--loading`} />)}
      { (icon && !loading) && (<Icon name={icon} className={iconClassName} />)}
      {(text && !loading) && (<span className='custom__button--text'>{text}</span>)}
    </animated.button>
  );
};

export default Button;
