import * as Yup from 'yup';

const newUserSchema = Yup.object({
  username: Yup.string()
    .min(6)
    .max(30, 'Debe contener máximo 15 caracteres')
    .required('Requerido'),
  name: Yup.string()
    .min(3)
    .max(30, 'Debe tener máximo 20 caracteres')
    .required('Requerido'),
  lastname: Yup.string()
    .min(3)
    .max(30, 'Debe tener máximo 20 caracteres')
    .required('Requerido'),
  email: Yup.string()
    .email('El email debe ser valido')
    .required('Requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener mímino 8 caracteres')
    .required('Requerido'),
  job_title_id: Yup.number()
    .integer('El cargo debe ser un número entero')
    .required('Requerido'),
  rol_id: Yup.string()
    .min(20, 'Rol_id invalido')
    .required('Requerido'),
});

export default newUserSchema;
