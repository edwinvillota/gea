import React, { useState } from 'react';
import Modal from '../components/Modal';

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children }) => (
    <>
      {isVisible && <Modal>{children}</Modal>}
    </>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};

export default useModal;
