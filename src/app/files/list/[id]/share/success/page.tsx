import {SuccessPage} from "@/src/shared/components/SuccessPage/SuccessPage";

export default function ShareSuccessPage() {
    return (
        <SuccessPage title={'¡Has compartido tu archivo con exito!'}
                     url={'/files/list'}
                     buttonText={'Volver a mis archivos'}/>
    );
}
