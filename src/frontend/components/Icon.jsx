import React from 'react';
import * as Ai from 'react-icons/ai';
import * as Md from 'react-icons/md';
import * as Fa from 'react-icons/fa';

// Assets
import '../assets/styles/components/Icon.scss';

const Icon = ({ name, className }) => {

  let selectedIcon;
  const type = name.substring(0, 2);

  switch (type) {
    case 'Ai':
      if (Ai[name] !== undefined) {
        selectedIcon = Ai[name];
      } else {
        selectedIcon = Ai.AiOutlineWarning;
      }
      break;
    case 'Md':
      if (Md[name] !== undefined) {
        selectedIcon = Md[name];
      } else {
        selectedIcon = Ai.AiOutlineWarning;
      }
      break;
    case 'Fa':
      if (Fa[name] !== undefined) {
        selectedIcon = Fa[name];
      } else {
        selectedIcon = Ai.AiOutlineWarning;
      }
      break;
    default:
      selectedIcon = Ai.AiOutlineWarning;
      break;
  }

  return (
    <div className='icon__wrapper'>
      {selectedIcon({ className })}
    </div>
  );
};

export default Icon;
