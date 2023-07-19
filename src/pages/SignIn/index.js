import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import {AuthContext}from  '../../contexts/auth';
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles';
import {useNavigation} from '@react-navigation/native'
export default function SignIn() {
    
    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {SignIn, loadingAuth} = useContext(AuthContext);
   
    function handleLogin(){
        SignIn(email, password);
    }


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
                    value={email}
                    onChangeText={(texto)=> setEmail(texto)}
                    
                    />
                
            </AreaInput>

            <AreaInput>
                    <Input
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(texto)=> setPassword(texto)}
                    />
            </AreaInput>
            <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                {loadingAuth ? (
                
                <ActivityIndicator size={20} color="#FFF"/>
                
                ) :  (<SubmitText>Acessar</SubmitText>) }
               
            </SubmitButton>
            <Link onPress={()=> navigation.navigate('SignUp')} >
                <LinkText>Criar uma Conta</LinkText>
            </Link>
        </Container>
       </Background>
    );
}

