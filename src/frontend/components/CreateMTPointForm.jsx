/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import newMTPointSchema from '../utils/formSchemas/newMTPoint';

// Assets
import '../assets/styles/components/CreateMTPointForm.scss';

// Components
import FormError from './FormError';

const CreateMTPointForm = (props) => {

  const formik = useFormik({
    initialValues: {
      structure: '',
      type: '',
      latitude: '',
      longitude: '',
      comments: '',
    },
    validationSchema: newMTPointSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='themedform grid createMTPointForm'>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.structure && formik.errors.structure })}>
        <label className='field__label' htmlFor='structure'>Estructura</label>
        <input className='field__input' type='text' name='structure' {...formik.getFieldProps('structure')} />
        { formik.touched.structure && formik.errors.structure ? (
          <FormError error={formik.errors.structure} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', 'job_title', { 'error': !!(formik.touched.type && formik.errors.type) })}>
        <label className='field__label' htmlFor='type'>Tipo</label>
        <select name='type' id='type' className='field__input' {...formik.getFieldProps('type')}>
          <option value=''> </option>
          <option value='P'>Paso</option>
          <option value='A'>Angular</option>
          <option value='R'>Retención</option>
        </select>
        { formik.touched.type && formik.errors.type ? (
          <FormError error={formik.errors.type} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.latitude && formik.errors.latitude })}>
        <label className='field__label' htmlFor='latitude'>Latitud</label>
        <input className='field__input' type='text' name='latitude' {...formik.getFieldProps('latitude')} />
        { formik.touched.latitude && formik.errors.latitude ? (
          <FormError error={formik.errors.latitude} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', { 'error': formik.touched.longitude && formik.errors.longitude })}>
        <label className='field__label' htmlFor='longitude'>Longitud</label>
        <input className='field__input' type='text' name='longitude' {...formik.getFieldProps('longitude')} />
        { formik.touched.longitude && formik.errors.longitude ? (
          <FormError error={formik.errors.longitude} />
        ) : null}
      </div>
      <div className={classNames('themedform__field', 'vertical', 'comments', { 'error': formik.touched.comments && formik.errors.comments })}>
        <label className='field__label' htmlFor='hasSubmodules'>Descripción</label>
        <textarea className='field__input textarea' name='comments' {...formik.getFieldProps('comments')} />
        { formik.touched.comments && formik.errors.comments ? (
          <FormError error={formik.errors.comments} />
        ) : null}
      </div>
      <button className='themedform__submit' type='submit'>Crear</button>
    </form>
  );
};

export default CreateMTPointForm;
