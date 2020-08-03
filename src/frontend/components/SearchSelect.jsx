import React from 'react';

// Assets
import '../assets/styles/components/SearchSelect.scss';

const SearchSelect = ({ options = [] }) => {

  return (
    <select className='searchselect__select'>
      {
        options.map((opt) => (
          <option key={opt.value} value={opt.value} className='searchselect__option'>
            {opt.name}
          </option>
        ))
      }
    </select>
  );
};

export default SearchSelect;
