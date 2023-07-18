import React from 'react';
import { Platform} from 'react-native';

import {Background, Container, AreaInput, SubmitButton, SubmitText, Input} from '../SignIn/styles';


export default function SignUP() {
    return (

        <Background>
            <Container  behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
                <AreaInput>
                    <Input 
                    placeholder='Nome'
                    />
                </AreaInput>
                <AreaInput>
                <Input 
                    placeholder='Email'
                    />
                </AreaInput>
                <AreaInput>
                <Input 
                    placeholder='Senha'
                    />
                </AreaInput>
                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
       
    );
}

