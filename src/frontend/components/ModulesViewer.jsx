import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTrail, animated } from 'react-spring';

// Assets
import '../assets/styles/components/ModulesViewer.scss';

// Actions
import { getAllModules } from '../actions/modulesActions';

// Components
import ModuleCard from './ModuleCard';

const ModulesViewer = ({ getAllModules, modules }) => {

  const { loaded, list } = modules;

  const trail = useTrail(list.length, {
    from: { opacity: 0, transform: 'translateY(200px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  useEffect(() => {
    getAllModules();
  }, []);

  return (
    <div className='Modules__grid'>
      { loaded ?
        (
          trail.map((props, i) => (
            <animated.div
              key={list[i].module_id}
              style={props}
            >
              <ModuleCard module={list[i]} />
            </animated.div>
          ))
        ) :
        'Cargando...'}
    </div>
  );
};

const mapStateToProps = (state) => ({
  modules: state.modules,
});

const mapDispatchToProps = {
  getAllModules,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModulesViewer);
