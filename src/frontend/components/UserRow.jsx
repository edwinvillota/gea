/* eslint-disable camelcase */
import React from 'react';
import moment from 'moment';

// Theme
import { theme } from '../utils/config';

// Assets
import '../assets/styles/components/UserRow.scss';

// Components
import Button from './Button';

const UserRow = ({ user }) => (
  <div className='list__row'>
    <span>{user.username}</span>
    <span>{user.name}</span>
    <span>{user.lastname}</span>
    <span>{user.email}</span>
    <span>{user.rol.name}</span>
    <span>{moment(user.createdAt).format('DD-MM-YY hh:mm A')}</span>
    <div className='actions__wrapper'>
      <Button icon='AiOutlineDelete' className='actions__icon' background='trasparent' foreground={theme.colors.$Mid_gray} />
      <Button icon='AiOutlineEdit' className='actions__icon' background='trasparent' foreground={theme.colors.$Mid_gray} />
    </div>
  </div>
);

export default UserRow;
