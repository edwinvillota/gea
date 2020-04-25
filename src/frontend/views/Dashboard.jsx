import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';

// Assets
import '../assets/styles/views/Dashboard.scss';

// Layout
import AppLayout from '../layouts/AppLayout';

const Dashboard = () => {

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const trail = useTrail(6, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  return (
    <AppLayout>
      <div className='view__wrapper'>
        <animated.h1 style={props} className='dashboard__title'>Bienvenidos</animated.h1>
        <animated.h2 style={props} className='dashboard__subtitle'>Aplicación de Gestión Administrativa</animated.h2>

        <div className='grid'>
          {
            trail.map((props) => <animated.div className='box' style={props} />)
          }
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
