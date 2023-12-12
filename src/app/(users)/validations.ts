import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
    username: Yup.string().email().required('Debe ingresar un correo electrónico'),
    password: Yup.string().min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(16, "La contraseña debe tener como maximo 16 caracteres")
        .required('Debe ingresar una contraseña'),
})

export const signInValidationSchema = Yup.object().shape({
    username: Yup.string().email().required('Debe ingresar un correo electrónico'),
    password: Yup.string().required('Debe ingresar una contraseña'),
})
