import {SuccessPage} from "@/src/shared/components/SuccessPage/SuccessPage";

export default function SignUpSuccessPage() {
    return (
        <SuccessPage title={'¡Te has registrado con exito!'}
                     url={'/sign-in'}
                     buttonText={'Ingresar'}/>
    );
}
