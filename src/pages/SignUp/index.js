import React, {useContext, useState} from 'react';
import { Platform, ActivityIndicator} from 'react-native';
import { AuthContext } from '../../contexts/auth'

import {Background, Container, AreaInput, SubmitButton, SubmitText, Input} from '../SignIn/styles';

export default function SignUp() {
    const {signUp, loadingAuth}= useContext(AuthContext)
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    function handleSignUp(){
        if(nome === '' || password === '' ||  email === '' ) {
            alert("Todos os campos são obrigatórios!")
            return;
        }

        signUp(email, password, nome);
    }
    return (

        <Background>
            <Container  behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
                <AreaInput>
                    <Input 
                    placeholder='Nome'
                    value={nome}
                    onChangeText={(text)=> setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                <Input 
                    placeholder='Email'
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                <Input 
                    placeholder='Senha'
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                    />
                </AreaInput>
                <SubmitButton>
                    {loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF" />
                    ): (<SubmitText onPress={handleSignUp}>Cadastrar</SubmitText>)}
                </SubmitButton>
            </Container>
        </Background>
       
    );
}

