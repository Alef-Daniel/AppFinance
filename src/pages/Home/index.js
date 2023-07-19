import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function App() {

const{signOut, user} = useContext(AuthContext);

    return (

        <View>
            <Text>Tela Home</Text>
            <Text>nome: {user.name}</Text>
            <Button title='Sair da Conta' onPress={()=> signOut()}></Button>
        </View>
    );
}
