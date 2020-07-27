import React from 'react';
import ReactDom from 'react-dom';

// Assets
import '../assets/styles/components/Modal.scss';

// Components

const Modal = React.memo(({ children }) => {
  const domEl = document.getElementById('modal-root');

  if (!domEl) return null;

  return ReactDom.createPortal(
    <div className='modal__container'>
      <div className='modal__panel'>
        {children}
      </div>
    </div>,
    domEl,
  );
});

export default Modal;
