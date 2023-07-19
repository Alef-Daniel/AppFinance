import React, {useContext}from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from  '../contexts/auth'

function Routes(){
   
    const {signed, loading} = useContext(AuthContext);


    if(loading){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F4FF'
            }} >
                <ActivityIndicator size='large' color="#131313"/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes></AppRoutes> : <AuthRoutes/>
  );
  }

  export default Routes;


  //Routes é responsavel por verificar se usuário esta logado ou não e com isso 
  //ele define qual rota ele vai seguir.
  //Caso o usuáriuo esteja logado ele vai para rotas do Drawer caso não ele vai para rotas do auth 