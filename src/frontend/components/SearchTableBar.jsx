import React from 'react';

// Assets
import '../assets/styles/components/SearchTableBar.scss';

// Components
import Icon from './Icon';
import Button from './Button';
import SearchSelect from './SearchSelect';

const SearchTableBar = ({ options, keyword, handleChangeKeyword }) => {

  return (
    <div className='searchtablebar__container'>
      <SearchSelect options={options} />
      <Icon name='AiOutlineSearch' className='searchtablebar__icon' />
      <input type='text' className='searchtablebar__input' placeholder='Buscar ...' value={keyword} onChange={(e) => handleChangeKeyword(e.target.value)} />
      <div className='filters__wrapper'>
        <Button text='Filtros' icon='AiOutlineFilter' background='transparent' className='filters__button' />
      </div>
    </div>
  );
};

export default SearchTableBar;
