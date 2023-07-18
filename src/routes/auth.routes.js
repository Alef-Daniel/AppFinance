import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn/Index';
import SignUP from '../pages/SignUp/Index';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name='SignIn'
            component={SignIn}
            />
            <AuthStack.Screen
            name='SignUp'
            component={SignUP}
            />
        </AuthStack.Navigator>
    )
}


export default AuthRoutes;