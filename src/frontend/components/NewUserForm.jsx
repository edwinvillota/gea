/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import newUserSchema from '../utils/formSchemas/newUser';

// Assets
import '../assets/styles/components/NewUserForm.scss';

// Componets
import FormError from './FormError';
import Spinner from './Spinner';

// Hooks
import useModal from '../hooks/useModal';

// Actions
import { getAllRoles } from '../actions/rolesActions';
import { createUser } from '../actions/usersActions';

const NewUserForm = ({ getAllRoles, roles, createUser, users }) => {

  const { list: rolList } = roles;
  const { show, RenderModal } = useModal();

  useEffect(() => getAllRoles(), []);

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      job_title_id: '',
      rol_id: '',
    },
    validationSchema: newUserSchema,
    onSubmit: (values) => {
      show();
      createUser(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form__container--form'>
      <label className='form__input--label' htmlFor='username'>Usuario</label>
      <input className='form__input--field' type='text' name='username' {...formik.getFieldProps('username')} />
      { formik.touched.username && formik.errors.username ? (
        <FormError error={formik.errors.username} />
      ) : null}
      <label className='form__input--label' htmlFor='name'>Nombres</label>
      <input className='form__input--field' type='text' name='name' {...formik.getFieldProps('name')} />
      { formik.touched.name && formik.errors.name ? (
        <FormError error={formik.errors.name} />
      ) : null}
      <label className='form__input--label' htmlFor='lastname'>Apellidos</label>
      <input className='form__input--field' type='text' name='lastname' {...formik.getFieldProps('lastname')} />
      { formik.touched.lastname && formik.errors.lastname ? (
        <FormError error={formik.errors.lastname} />
      ) : null}
      <label className='form__input--label' htmlFor='email'>Email</label>
      <input className='form__input--field' type='email' name='email' {...formik.getFieldProps('email')} />
      { formik.touched.email && formik.errors.email ? (
        <FormError error={formik.errors.email} />
      ) : null}
      <label className='form__input--label' htmlFor='password'>Contraseña</label>
      <input className='form__input--field' type='password' name='password' {...formik.getFieldProps('password')} />
      { formik.touched.password && formik.errors.password ? (
        <FormError error={formik.errors.password} />
      ) : null}
      <label className='form__input--label' htmlFor='job'>Cargo</label>
      <select name='job' id='job' className='form__input--field' {...formik.getFieldProps('job_title_id')}>
        <option value=''> </option>
        <option value='1'>Asistente Administrativo</option>
        <option value='2'>Auxiliar Administrativo</option>
        <option value='3'>Auxiliar de Almacen</option>
        <option value='4'>Ing Residente</option>
      </select>
      { formik.touched.job_title_id && formik.errors.job_title_id ? (
        <FormError error={formik.errors.job_title_id} />
      ) : null}
      <label className='form__input--label' htmlFor='rol'>Rol</label>
      <select name='rol' id='rol' className='form__input--field' {...formik.getFieldProps('rol_id')}>
        <option value=''> </option>
        {
          rolList ?
            (rolList.map((rol, i) => <option value={rol.rol_id} key={i}>{rol.name}</option>)) :
            (null)
        }
      </select>
      { formik.touched.rol_id && formik.errors.rol_id ? (
        <FormError error={formik.errors.rol_id} />
      ) : null}
      <button className='form__button--submit' type='submit'>Crear</button>
      <RenderModal>
        <div className='newUser__modal--body'>
          <span className='newUser__modal--text'>
            <Spinner loaded={users.loaded} error={users.error} className='newUser__spinner' />
            {users.error ? users.error.message : ''}
            {users.createdUser ? 'Usuario creado correctamente' : ''}
          </span>
          <div className='newUser__modal--actions'>
            <Link to='/app/management/users' className='modal__action'>
              Aceptar
            </Link>
          </div>
        </div>
      </RenderModal>
    </form>
  );
};

const mapStateToProps = (state) => ({
  roles: state.roles,
  users: state.users,
});

const mapDispatchToProps = {
  getAllRoles,
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
