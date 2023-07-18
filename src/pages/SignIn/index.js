import React from 'react';
import { Platform } from 'react-native';

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles';
import {useNavigation} from '@react-navigation/native'
export default function SignIn() {
    
    
    const navigation = useNavigation();
    
    
    return (
       <Background>
        {/* Behavior ativa a funcção onde quando o teclado é ativado ele não esconde a aplicação no IOS
        pois no Android isso acontece por default */}

        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled
        >
            <Logo
            source={require('../../assets/Logo.png')}
            />
            <AreaInput>
                    <Input
                    placeholder='Email'
                    
                    />
                
            </AreaInput>

            <AreaInput>
                    <Input
                    placeholder='Senha'
                    secureTextEntry={true}
                    />
            </AreaInput>
            <SubmitButton activeOpacity={0.8}>
                <SubmitText>Acessar</SubmitText>
            </SubmitButton>
            <Link onPress={()=> navigation.navigate('SignUp')} >
                <LinkText>Criar uma Conta</LinkText>
            </Link>
        </Container>
       </Background>
    );
}

