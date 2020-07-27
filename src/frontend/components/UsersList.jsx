import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Assets
import '../assets/styles/components/UsersList.scss';

// Components
import Icon from './Icon';
import UserRow from './UserRow';

// Actions
import { getAllUsers } from '../actions/usersActions';

const UsersList = ({ getAllUsers, users }) => {

  useEffect(() => {
    getAllUsers();
  }, []);

  const { list } = users;

  return (
    <div className='userlist__wrapper'>
      <div className='userlist__header--wrapper'>
        <h1 className='userlist__title'>Usuarios Activos</h1>
        <Link to='/app/management/users/create' className='userlist__link--create'>
          <Icon name='AiOutlineUserAdd' className='userlist__link--icon' />
          <span>Crear nuevo usuario</span>
        </Link>
      </div>
      <div className='userlist__search--wrapper'>
        <Icon name='AiOutlineSearch' className='userlist__search--icon' />
        <input type='text' className='userlist__search--input' placeholder='Buscar usuarios activos...' />
        <div className='search__filters--wrapper'>
          <Icon name='AiOutlineFilter' className='filter__icon' />
          <span>Filtros</span>
        </div>
      </div>
      <div className='list__container'>
        <div className='list__header'>
          <span>Usuario</span>
          <span>Nombre</span>
          <span>Apellidos</span>
          <span>Email</span>
          <span>Rol</span>
          <span>Fecha de Creación</span>
        </div>
        {
          list ?
            // eslint-disable-next-line react/no-array-index-key
            (list.map((u, i) => <UserRow user={u} key={i} />)) :
            (<span>Cargando...</span>)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
