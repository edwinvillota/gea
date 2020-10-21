import React, { useState } from 'react';
import { connect } from 'react-redux';
// Assets
import '../assets/styles/components/UserPayInput.scss';

// Components
import Button from './Button';

// Theme
import { theme } from '../utils/config';

// Actions
import { getLpUser } from '../actions/lpUsersActions';

const UserPayInput = ({ getLpUser, lpUsers }) => {

  const {
    requestedLpUser: lpUser,
    loaded,
  } = lpUsers;

  const [code, setCode] = useState(null);

  const handleSearch = () => {
    getLpUser(code);
  };

  return (
    <div className='payment__input--search'>
      <label htmlFor='code__input'>Código de Usuario</label>
      <div className='controls__wrapper'>
        <input
          type='text'
          id='code__input'
          placeholder='Digite el código del usuario'
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          text='Buscar'
          icon='AiOutlineSearch'
          background={theme.colors.$Accent}
          foreground={theme.colors.$White}
          className='search__button'
          iconClassName='search__icon'
          onClick={() => handleSearch()}
          disabled={loaded}
          loading={loaded}
        />
      </div>
      {
        lpUser ?
          (
            <div className='results__wrapper'>
              <div className='prop__wrapper'>
                <span className='prop__title'>
                  Código
                </span>
                <span className='prop__value'>
                  {lpUser.code}
                </span>
              </div>
              <div className='prop__wrapper'>
                <span className='prop__title'>
                  Usuario
                </span>
                <span className='prop__value'>
                  {lpUser.name}
                </span>
              </div>
              <div className='prop__wrapper'>
                <span className='prop__title'>
                  Dirección
                </span>
                <span className='prop__value'>
                  {lpUser.address}
                </span>
              </div>
              <div className='prop__wrapper'>
                <span className='prop__title'>
                  Tipo de Tarifa
                </span>
                <span className='prop__value'>
                  {`$ ${lpUser.rateType}`}
                </span>
              </div>
            </div>
          ) :
          (null)
      }

    </div>
  );
};

const mapStateToProps = (state) => ({
  lpUsers: state.lpUsers,
});

const mapDispatchToProps = {
  getLpUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPayInput);
