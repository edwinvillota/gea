import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/views/Login.scss';
import Icon from '../components/Icon';

// Actions
import { loginUser } from '../actions/authActions';

// Layout
import NotLayout from '../layouts/NotLayout';

const Login = ({ error, loginUser }) => {

  const [form, setValues] = useState({
    username: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(form, '/app');
  };

  return (
    <NotLayout>
      <div className='loginview__container'>
        <div className='form__container'>
          <form action='' className='login__form' onSubmit={handleSubmit}>
            <div className='icon__section'>
              <div className='icon__wrapper'>
                <Icon name='FaUserAlt' className='login__icon' />
              </div>
              <h1 className='icon__text'>Iniciar Sesión</h1>
            </div>
            <div className='inputs__section'>
              <input
                name='username'
                type='text'
                className='input user__input'
                id='user__input'
                placeholder='Usuario'
                onChange={handleInput}
                required
              />
              <input
                name='password'
                type='password'
                className='input password__input'
                id='password__input'
                placeholder='Contraseña'
                onChange={handleInput}
                required
              />
              <button
                type='submit'
                className='submit__button'
              >
                Ingresar
              </button>
              <span className='error__message'>{!error ? null : `Error: ${error.message}`}</span>
            </div>
          </form>
        </div>
      </div>
    </NotLayout>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
