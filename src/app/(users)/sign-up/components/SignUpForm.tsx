'use client'
import * as Yup from 'yup';
import styled, {ThemeProvider} from 'styled-components';
import {signUpIcon} from "@consus/react-forms";
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

export interface SignUpFormProps {
    onSubmit: (formData: FormData) => Promise<void>;
}

export const SignUpForm = ({onSubmit}: SignUpFormProps) => {
    return (
        <ThemeProvider theme={theme}>
            <form action={onSubmit}>
                <FormFrame icon={signUpIcon}>
                    <Container>
                        <StyledText size={'md'} weight={'semiBold'}>¡Creemos tu cuenta!</StyledText>
                        <FormControl>
                            <label htmlFor={'username'}>Corréo electrónico</label>
                            <Input type={'email'} maxLength={100} name={'username'}/>
                        </FormControl>
                        <FormControl>
                            <label htmlFor={'username'}>Contraseña</label>
                            <Input type={'password'} maxLength={16} name={'password'}/>
                        </FormControl>
                        <Button type={'submit'}>Registrarse</Button>
                    </Container>
                </FormFrame>
            </form>
        </ThemeProvider>
    )
}
