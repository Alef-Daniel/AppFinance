import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn';
import SignUP from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name='SignIn'
            component={SignIn}
            options={{
                headerShown: false,
            }}
            />
            <AuthStack.Screen
            name='SignUp'
            component={SignUP}
            options={{
                headerStyle:{
                   backgroundColor: "#3b3dbf",
                   borderBottomWidth: 1,
                   borderBottomColor: "#00b94a"
                },
                headerTintColor: '#FFF',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}
            />
        </AuthStack.Navigator>
    )
}


export default AuthRoutes;