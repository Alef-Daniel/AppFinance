import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from   '../pages/Home'



    const appDrawer = createDrawerNavigator();

    function AppRoutes(){
        return (
            <appDrawer.Navigator>
                <appDrawer.Screen name="Home" component={Home}/>
            </appDrawer.Navigator>
        )
    }
  

    export default AppRoutes;