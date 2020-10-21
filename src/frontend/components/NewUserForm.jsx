/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import classNames from 'classnames';
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
    <form onSubmit={formik.handleSubmit} className='themedform grid newuserform'>
      <div className={classNames('themedform__field', 'vertical', 'username', { 'error': formik.touched.username && formik.errors.username })}>
        <label className='field__label' htmlFor='username'>Usuario</label>
        <input className='field__input' type='text' name='username' {...formik.getFieldProps('username')} />
        { formik.touched.username && formik.errors.username ? (
          <FormError error={formik.errors.username} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': !!(formik.touched.name && formik.errors.name) })}>
        <label className='field__label' htmlFor='name'>Nombres</label>
        <input className='field__input' type='text' name='name' {...formik.getFieldProps('name')} />
        { formik.touched.name && formik.errors.name ? (
          <FormError error={formik.errors.name} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': !!(formik.touched.lastname && formik.errors.lastname) })}>
        <label className='field__label' htmlFor='lastname'>Apellidos</label>
        <input className='field__input' type='text' name='lastname' {...formik.getFieldProps('lastname')} />
        { formik.touched.lastname && formik.errors.lastname ? (
          <FormError error={formik.errors.lastname} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': !!(formik.touched.email && formik.errors.email) })}>
        <label className='field__label' htmlFor='email'>Email</label>
        <input className='field__input' type='email' name='email' {...formik.getFieldProps('email')} />
        { formik.touched.email && formik.errors.email ? (
          <FormError error={formik.errors.email} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': !!(formik.touched.password && formik.errors.password) })}>
        <label className='field__label' htmlFor='password'>Contraseña</label>
        <input className='field__input' type='password' name='password' {...formik.getFieldProps('password')} />
        { formik.touched.password && formik.errors.password ? (
          <FormError error={formik.errors.password} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', 'job_title', { 'error': !!(formik.touched.job_title_id && formik.errors.job_title_id) })}>
        <label className='field__label' htmlFor='job'>Cargo</label>
        <select name='job' id='job' className='field__input' {...formik.getFieldProps('job_title_id')}>
          <option value=''> </option>
          <option value='1'>Asistente Administrativo</option>
          <option value='2'>Auxiliar Administrativo</option>
          <option value='3'>Auxiliar de Almacen</option>
          <option value='4'>Ing Residente</option>
        </select>
        { formik.touched.job_title_id && formik.errors.job_title_id ? (
          <FormError error={formik.errors.job_title_id} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', 'rol', { 'error': !!(formik.touched.rol_id && formik.errors.rol_id) })}>
        <label className='field__label' htmlFor='rol'>Rol</label>
        <select name='rol' id='rol' className='field__input' {...formik.getFieldProps('rol_id')}>
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
      </div>
      <button className='themedform__submit' type='submit'>Crear</button>
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
