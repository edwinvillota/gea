/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
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
    <form onSubmit={formik.handleSubmit} className='form__container--form'>
      <label className='form__input--label' htmlFor='name'>Nombre</label>
      <input className='form__input--field' name='name' {...formik.getFieldProps('name')} />
      { formik.touched.name && formik.errors.name ? (
        <FormError error={formik.errors.name} />
      ) : null}
      <label className='form__input--label' htmlFor='route'>Ruta</label>
      <input className='form__input--field' name='route' {...formik.getFieldProps('route')} />
      { formik.touched.route && formik.errors.route ? (
        <FormError error={formik.errors.route} />
      ) : null}
      <label className='form__input--label' htmlFor='icon'>Icono</label>
      <input className='form__input--field' name='icon' {...formik.getFieldProps('icon')} />
      { formik.touched.icon && formik.errors.icon ? (
        <FormError error={formik.errors.icon} />
      ) : null}
      <label className='form__input--label' htmlFor='hasSubmodules'>¿Tiene Submodulos?</label>
      <input className='form__input--checkbox' name='hasSubmodules' type='checkbox' {...formik.getFieldProps('hasSubmodules')} />
      { formik.touched.hasSubmodules && formik.errors.hasSubmodules ? (
        <FormError error={formik.errors.hasSubmodules} />
      ) : null}
      <label className='form__input--label' htmlFor='hasSubmodules'>Descripción</label>
      <textarea className='form__input--field form__input--textarea' name='description' {...formik.getFieldProps('description')} />
      { formik.touched.description && formik.errors.description ? (
        <FormError error={formik.errors.description} />
      ) : null}
      <button className='form__button--submit' type='submit'>Crear</button>
    </form>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  createModule,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewModuleForm);
