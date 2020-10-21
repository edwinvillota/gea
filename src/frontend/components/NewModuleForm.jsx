/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import classNames from 'classnames';
import newModuleSchema from '../utils/formSchemas/newModule';

// Assets
import '../assets/styles/components/NewModuleForm.scss';

// Components
import FormError from './FormError';

// Actions
import { createModule } from '../actions/modulesActions';

const NewModuleForm = (props) => {

  const { createModule } = props;

  const formik = useFormik({
    initialValues: {
      name: '',
      route: '',
      icon: '',
      hasSubmodules: false,
      description: '',
    },
    validationSchema: newModuleSchema,
    onSubmit: (values) => {
      createModule(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='themedform grid newmoduleform'>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.name && formik.errors.name })}>
        <label className='field__label' htmlFor='name'>Nombre</label>
        <input className='field__input' type='text' name='name' {...formik.getFieldProps('name')} />
        { formik.touched.name && formik.errors.name ? (
          <FormError error={formik.errors.name} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.route && formik.errors.route })}>
        <label className='field__label' htmlFor='route'>Ruta</label>
        <input className='field__input' name='route' {...formik.getFieldProps('route')} />
        { formik.touched.route && formik.errors.route ? (
          <FormError error={formik.errors.route} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.icon && formik.errors.icon })}>
        <label className='field__label' htmlFor='icon'>Icono</label>
        <input className='field__input' name='icon' {...formik.getFieldProps('icon')} />
        { formik.touched.icon && formik.errors.icon ? (
          <FormError error={formik.errors.icon} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.hasSubmodules && formik.errors.hasSubmodules })}>
        <label className='field__label' htmlFor='hasSubmodules'>¿Tiene Submodulos?</label>
        <input className='field__input checkbox' name='hasSubmodules' type='checkbox' {...formik.getFieldProps('hasSubmodules')} />
        { formik.touched.hasSubmodules && formik.errors.hasSubmodules ? (
          <FormError error={formik.errors.hasSubmodules} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', 'description', { 'error': formik.touched.description && formik.errors.description })}>
        <label className='field__label' htmlFor='hasSubmodules'>Descripción</label>
        <textarea className='field__input textarea' name='description' {...formik.getFieldProps('description')} />
        { formik.touched.description && formik.errors.description ? (
          <FormError error={formik.errors.description} />
        ) : null}
      </div>
      <button className='themedform__submit' type='submit'>Crear</button>
    </form>
  );
};

const mapDispatchToProps = {
  createModule,
};

export default connect(null, mapDispatchToProps)(NewModuleForm);
