import {SuccessPage} from "@/src/shared/components/SuccessPage/SuccessPage";

export default function ShareSuccessPage() {
    return (
        <SuccessPage title={'¡Archivo modificado con exito!'}
                     url={'/files/list'}
                     buttonText={'Volver a mis archivos'}/>
    );
}
