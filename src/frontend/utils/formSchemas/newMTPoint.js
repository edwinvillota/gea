import * as Yup from 'yup';

const newMTPointSchema = Yup.object({
  structure: Yup.string()
    .max(20, 'Debe tener máximo 20 caracteres')
    .required('Requerido'),
  type: Yup.string()
    .min(1, 'Debe tener minimo 1 caracteres')
    .max(15, 'Debe tener máximo 15 caracteres')
    .required('Requerido'),
  latitude: Yup.string()
    .min(5, 'Debe tener mínimo 5 caracteres')
    .required('Requerido'),
  longitude: Yup.string()
    .min(5, 'Debe tener mínimo 5 caracteres')
    .required('Requerido'),
  comments: Yup.string()
    .min(5, 'Debe tener mínimo 5 caracteres')
    .max(200, 'Máximo permitido 200 caracteres')
    .required('Requerido'),
});

export default newMTPointSchema;
