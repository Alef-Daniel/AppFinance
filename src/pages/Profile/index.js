
import React, {useContext} from 'react';
import {} from 'react-native';
import{ 
    Message,
    Container, 
    Name, 
    NewLink, 
    NewText, 
    LogoutButton, 
    LogoutText }from './style';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';
import{ useNavigation} from '@react-navigation/native'

export default function Profile(){

    const navigation = useNavigation();
    const{user, signOut} = useContext(AuthContext)

return(
    
    
    <Container>
        <Header title={'Meu Perfil'}></Header>
        <Message>Hey, Bem vindo de volta!</Message>
        <Name 
        numberOfLines={1}>
            {user && user.name }
        </Name>
        <NewLink onPress={()=>navigation.navigate('Registar')}>
            <NewText>Registrar gastos</NewText>
        </NewLink>
        <LogoutButton onPress={()=> signOut()}>
                <LogoutText>Sair</LogoutText>
        </LogoutButton>
    </Container>
    
  );
  }




