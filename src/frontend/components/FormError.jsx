import React from 'react';
import { useSpring, animated } from 'react-spring';

const FormError = ({ error }) => {

  const props = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0)' },
  });

  return (
    <animated.div style={props}>
      <span className='field__error'>
        {error}
      </span>
    </animated.div>
  );
};

export default FormError;
