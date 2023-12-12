'use client'
import {FormControl} from "@/src/shared/components/form/FormControl/FormControl";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FormContainer} from "@/src/shared/components/form/FormContainer/FormContainer";
import {FormFrame} from "@/src/shared/components/FormFrame/FormFrame";
import {Text} from "@/src/shared/components/Text/Text";
import {signUpValidationSchema} from "@/src/app/(users)/validations";
import {Form, Formik} from "formik";
import {SignUpPayload} from "@/src/app/(users)/interfaces";
import {postSignIn, postSignUp} from "@/src/app/(users)/users/api/service";
import {useState} from "react";
import {Messages} from "@/src/messages";
import {ErrorMessage} from "@/src/shared/components/ErrorMessage/ErrorMessage";
import {FormInput} from "@/src/shared/components/form/FormInput/FormInput";
import {SubmitButton} from "@/src/shared/components/form/SubmitButton/SubmitButton";

export const SignUpForm = () => {
    const [serverError,setServerError] = useState<any>('');

    const handleSubmit = async (values: SignUpPayload) => {
        try {
            await postSignUp(values);
        } catch (e: any) {
            setServerError(e?.response?.data?.code ? Messages[e.response.data.code] : Messages.genericError)
            return;
        };

        let signInResponse;
        try {
            signInResponse = await postSignIn(values);
        } catch (e) {
            setServerError(Messages.genericError)
            return;
        }

        if(signInResponse?.error) {
            setServerError(Messages.genericError);
            return;
        }

        window.location.href = "/files/list";
    }

    return (
        <Formik
            initialValues={{username: '', password: ''} as any}
            validationSchema={signUpValidationSchema}
            enableReinitialize={true}
            onSubmit={handleSubmit}
        >
            {({
                  handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit}>
                <FormFrame icon={faUser}>
                    <FormContainer>
                        <Text size={'md'} weight={'semiBold'} align={'center'}>¡Creemos tu cuenta!</Text>
                        <FormControl>
                            <label htmlFor={'username'}>Corréo electrónico</label>
                            <FormInput type={'email'} maxLength={100} name={'username'}/>
                        </FormControl>
                        <FormControl>
                            <label htmlFor={'password'}>Contraseña</label>
                            <FormInput type={'password'} maxLength={16} name={'password'}/>
                        </FormControl>
                        <SubmitButton className={'margin-top-md'}>Crear usuario</SubmitButton>
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
