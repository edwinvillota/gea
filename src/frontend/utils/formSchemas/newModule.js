import * as Yup from 'yup';

const newModuleSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Debe tener maximo 50 caracteres')
    .required('Requerido'),
  route: Yup.string()
    .matches(/^\/app\/([a-z]{3,50}\/){1,5}/, { excludeEmptyString: true, message: 'Ruta Invalida' })
    .required('Requerido'),
  icon: Yup.string()
    .matches(/^(Ai|Md|Fa)[A-Z]{1}[a-z]{1,15}([A-Z]{1}[a-z]{1,15}){1,5}$/, { excludeEmptyString: true, message: 'Icono invalido' })
    .required('Requerido'),
  hasSubmodules: Yup.boolean(),
  description: Yup.string()
    .min(10, 'Debe tener al menos 10 caracteres')
    .max(100, 'Debe tener máximo 10 caracteres')
    .required('Requerido'),
});

export default newModuleSchema;
