import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import { ButtonFilter,ButtonFilterText, Container, ModalContent } from './style';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import format from 'date-fns/format';
import {ptBR} from './localeCalendar';


LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale= 'pt-br';

export default function CalendarModal({setVisible, handleFilter}){

const[dateNow, setDateNow] = useState(new Date());
const[markedDates, setMarkedDates] = useState({});


function handleOnDayPress(date){
    setDateNow(new Date(date.dateString));
    let markedDay = {};

    markedDay[date.dateString]={
        selected: true,
        selectedColor: '#3b3dbf',
        textColor: '#FFF'
    }

    setMarkedDates(markedDay)
}


function handleFilterDate(){

    handleFilter(dateNow);
    setVisible();


}



return(

 <Container>
    <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex:1}}></View>
    </TouchableWithoutFeedback>

    <ModalContent>

        <Calendar
        
        onDayPress={handleOnDayPress}
        markedDates={markedDates}
        enableSwipeMonths={true}
        theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00ADF5',
            selectedDayTextColor:'#FFF'
        }}
        
        />




        <ButtonFilter onPress={handleFilterDate}>
            <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
    </ModalContent>
 </Container>
  ) 
  }

 