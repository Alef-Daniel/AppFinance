import React from 'react';
import {} from 'react-native';
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText} from './style';
import Icon from 'react-native-vector-icons/Feather';
export default function HistoryList({data}){
return(
    <Container>
        <Tipo>
            <IconView tipo={data.type}>
                <Icon 
                name={data.type=== 'despesa'? 'arrow-down': 'arrow-up'}
                size={20} 
                color="#FFF"/>
                <TipoText>{data.type}</TipoText>
            </IconView>
        </Tipo>
        <ValorText>
            R$ {data.value}
        </ValorText>
    </Container>
  );
  }
