import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import classNames from 'classnames';

// Assets
import '../assets/styles/components/SideNav.scss';

// Actions
import {
  logoutRequest,
} from '../actions/authActions';

// Components
import SideNavModule from './SideNavModule';

const SideNav = (props) => {

  const { children } = props;

  const [visible, setVisibility] = useState(false);

  const { user } = props;
  const { modules } = user;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'id=';
    document.cookie = 'username=';
    document.cookie = 'rol_id=';
    document.cookie = 'token=';
    document.cookie = 'scopes=';
    props.logoutRequest();
    window.location.href = '/';
  };

  const handleChangueVisibility = () => {
    setVisibility(!visible);
  };

  return (
    <div className='main__container'>
      <div className={classNames('hamburguer__control--wrapper', { 'open': visible })}>
        <label htmlFor='h__check' className='hamburguer__label'>
          {
            visible ?
              (<IoMdClose className='hamburguer__icon' />) :
              (<IoMdMenu className='hamburguer__icon' />)
          }
        </label>
        <input
          type='checkbox'
          name='hamburguer'
          id='h__check'
          onClick={
            handleChangueVisibility
          }
        />
      </div>
      <nav className={classNames('sidenav__main--wrapper', { 'hide': !visible, 'show': visible })}>

        <div className='user__section'>
          <img src='' alt='' className='user__avatar' />
          <h1 className='user__name'>{user.username}</h1>
          <h2 className='user__jobtitle'>Asistente Administrativo</h2>
          <h3 className='user__rol'>Webmaster</h3>
        </div>

        <div className='modules__section'>
          { modules ? (
            modules.map((m, i) => (
              <SideNavModule
                key={m.name}
                module={m}
              />
            ))
          ) : (null)}
          {
            <SideNavModule
              module={{
                hasSubmodules: false,
                name: 'Cerrar Sesión',
                route: '/login',
                icon: 'AiOutlineLogout',
              }}
              handleAction={handleLogout}
            />
          }
        </div>
      </nav>
      <div className={classNames('main__content', { 'content__expanded': !visible })}>
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
