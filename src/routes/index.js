import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';

function Routes(){
    const loading = false;
    const signed= false;

    return(
        signed ? <View></View> : <AuthRoutes/>
  );
  }

  export default Routes;


  //Routes é responsavel por verificar se usuário esta logado ou não e com isso 
  //ele define qual rota ele vai seguir.
  //Caso o usuáriuo esteja logado ele vai para rotas do Drawer caso não ele vai para rotas do auth 