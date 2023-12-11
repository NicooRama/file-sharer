'use client'
import * as Yup from 'yup';
import styled, {ThemeProvider} from 'styled-components';
import {signInIcon} from "@consus/react-forms";
import {Button, FormFrame, Input, Text} from "@consus/react-ui";
import {theme} from "@/src/shared/theme";
import {FormControl} from "@/src/shared/components/form/FormControl";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`

const StyledText = styled(Text)`
  margin: 0 auto;
`

const validationSchema = Yup.object().shape({
    username: Yup.string().email().required('Debe ingresar un correo electrónico'),
    password: Yup.string().required('Debe ingresar una contraseña'),
})

export interface SignInFormProps {
    onSubmit: (formData: FormData) => Promise<void>;
}

export const SignInForm = ({onSubmit}: SignInFormProps) => {
    return (
        <ThemeProvider theme={theme}>
                <form action={onSubmit}>
                    <FormFrame icon={signInIcon}>
                        <Container>
                            <StyledText size={'md'} weight={'semiBold'}>¡Ingresa!</StyledText>
                            <FormControl>
                                <label htmlFor={'username'}>Corréo electrónico</label>
                                <Input type={'email'} maxLength={100} name={'username'}/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor={'username'}>Contraseña</label>
                                <Input type={'password'} maxLength={16} name={'password'}/>
                            </FormControl>
                            <Button type={'submit'}>Ingresar</Button>
                        </Container>
                    </FormFrame>
                </form>
        </ThemeProvider>
    )
}
