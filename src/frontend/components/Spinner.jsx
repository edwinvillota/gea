import React from 'react';
import classNames from 'classnames';

// Assets
import '../assets/styles/components/Spinner.scss';

// Components
import Icon from './Icon';

const Spinner = ({ className, loaded, error }) => {

  if (!loaded) {
    return (
      <Icon name='AiOutlineLoading' className={classNames('spinner__icon', className)} />
    );
  }
  if (error) {
    return (
      <Icon name='AiOutlineWarning' className={classNames(className, 'error__icon')} />
    );
  }
  return (
    <Icon name='AiOutlineCheck' className={classNames(className, 'success__icon')} />
  );

};

export default Spinner;
