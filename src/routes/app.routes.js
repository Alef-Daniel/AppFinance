import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from   '../pages/Home'
import New from '../pages/New';


    const appDrawer = createDrawerNavigator();

    function AppRoutes(){
        return (
            <appDrawer.Navigator 
            
            screenOptions={{
                headerShown: false,
                

                drawerStyle:{
                    backgroundColor:'#FFF',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#FFF',
                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
            
            >
                <appDrawer.Screen name="Home" component={Home}/>
                <appDrawer.Screen name="Registar" component={New}/>
            </appDrawer.Navigator>
        )
    }
  

    export default AppRoutes;