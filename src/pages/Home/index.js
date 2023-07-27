import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Modal } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import {Background, ListBalance, Area, Title, List} from './style'
import api from  '../../services/api'
import {format} from 'date-fns'
import BalanceItem from '../../components/BalanceItem';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoryList from '../../components/HistoryList';
import CalendarModal from '../../components/CalendarModal';

export default function Home() {
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovement, setDateMovement] = useState(new Date());
    const[movements, setMovements]= useState([]);
    const[modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{

        let isActive = true;

        async function getMovements(){
            
            let date = new Date(dateMovement)
            let onlyDate = date.valueOf()+date.getTimezoneOffset()*60*1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy')

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })


            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive){
                setMovements(receives.data)
                setListBalance(balance.data);
            }
        }

        getMovements();
        return ()=> isActive=false;

    },[isFocused, dateMovement])

   async function handleDelete(id){
        try{
            await api.delete('/receives/delete',{
                params:{
                    item_id: id
                }
            })
            setDateMovement(new Date());
        }catch(err){
            console.log(err);
        }
   }     


   function filterDateMovements(dateSelected){
    setDateMovement(dateSelected);
   }    

    return (

        <Background>
            <Header title="Minhas Movimentações" ></Header>
            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item}) => (<BalanceItem data={item}/>)}
            />
            <Area>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <Icon name="event" color="#121212" size={30}/>
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>
            <List
                data={movements}
                keyExtractor={item => item.id}
                renderItem={({item})=> <HistoryList data={item} deleteItem={handleDelete}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            />

        <Modal visible={modalVisible} animationType='fade' transparent={true}>
            <CalendarModal setVisible={()=> setModalVisible(false)}
                handleFilter={filterDateMovements}
            />
        </Modal>

        


        </Background>
        
    );
}
