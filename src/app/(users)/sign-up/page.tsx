import {SignUpForm} from "./components/SignUpForm";
import * as Yup from "yup";
import {sleep} from "@/src/shared/utils";
import {saveUser} from "@/src/app/(users)/users/api/service";

const validationSchema = Yup.object().shape({
    username: Yup.string().email().required('Debe ingresar un correo electrónico'),
    password: Yup.string().min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(16, "La contraseña debe tener como maximo 16 caracteres")
        .required('Debe ingresar una contraseña'),
})

export default async function SignUpPage() {
    await sleep(1000)

    const handleSubmit = async (formData: FormData) => {
        'use server'
        //TODO: ver como borrar o como hacer que la funcion no te devuelva "$ACTION_ID_..." para que no quede guardado
        const values = Object.fromEntries(formData.entries());
        const user = validationSchema.validateSync(values);
        await saveUser(user);
    }

    return (
        <div>
            <SignUpForm onSubmit={handleSubmit}/>
        </div>
    )
}
