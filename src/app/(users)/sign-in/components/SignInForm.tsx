'use client'
import {FormControl} from "@/src/shared/components/form/FormControl/FormControl";
import {Text} from "@/src/shared/components/Text/Text";
import {FormFrame} from "@/src/shared/components/FormFrame/FormFrame";
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {FormContainer} from "@/src/shared/components/form/FormContainer/FormContainer";
import {Form, Formik} from "formik";
import {signInValidationSchema} from "@/src/app/(users)/validations";
import {SignInPayload} from "@/src/app/(users)/interfaces";
import {FormInput} from "@/src/shared/components/form/FormInput/FormInput";
import {SubmitButton} from "@/src/shared/components/form/SubmitButton/SubmitButton";
import {ErrorMessage} from "@/src/shared/components/ErrorMessage/ErrorMessage";
import {useState} from "react";
import {Messages} from "@/src/messages";
import {postSignIn} from "@/src/app/(users)/users/api/service";

export const SignInForm = () => {
    const [serverError, setServerError] = useState<any>('');

    const handleSubmit = async (values: SignInPayload) => {
        let signInResponse;

        try {
            signInResponse = await postSignIn(values);
        } catch (e) {
            setServerError(Messages.genericError)
        }

        if(signInResponse?.error) {
            setServerError(signInResponse?.error ? Messages[signInResponse?.error] : Messages.genericError);
            return;
        }

        window.location.href = "/files/list";
    }

    return (
        <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={signInValidationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
        >
            {({
                  handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                    <FormFrame icon={faRightToBracket}>
                        <FormContainer>
                            <Text size={'md'} weight={'semiBold'} align={'center'}>¡Ingresa!</Text>
                            <FormControl>
                                <label htmlFor={'username'}>Corréo electrónico</label>
                                <FormInput type={'email'} maxLength={100} name={'username'}/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor={'password'}>Contraseña</label>
                                <FormInput type={'password'} maxLength={16} name={'password'}/>
                            </FormControl>
                            <SubmitButton className={'margin-top-md'}>Ingresar</SubmitButton>
                            {
                                serverError && <ErrorMessage>{serverError}</ErrorMessage>
                            }
                        </FormContainer>
                    </FormFrame>
                </Form>
            )}
        </Formik>
    )
}
