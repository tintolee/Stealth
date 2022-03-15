import React,{useState} from 'react';
import { Text, } from '../../components/util';
import { ChatRoom } from './types';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 
import { StyleSheet ,View, TouchableWithoutFeedback} from 'react-native'
import { useNavigation } from '@react-navigation/native';



export type ChatRoomProps={
 chatRoom: ChatRoom

}

const MessageListItem = (props: ChatRoomProps) => {
  const {chatRoom}= props
  const navigation = useNavigation();
   const user = chatRoom.users[1]

   

  const Click = () => {
    navigation.navigate('chatRoom', {id:chatRoom.id, name:user.name})
  }
    
  return (

    <TouchableWithoutFeedback   onPress={Click}>
    <View style={styles.container}>
     <View style={styles.leftContainer}>
         <View style={styles.image}>
        <Feather name="user" size={48} color="white" />
        </View>
        <View style={styles.midContainer}>
        <Text medium bold margin="0px 0px 10px 0px">{user.name}</Text>
      <Label>{chatRoom.lastMessage.content}</Label>
      </View>
      </View>
      <Label> Yesterday</Label>
      
    </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageListItem; 


const styles= StyleSheet.create({
    container:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      padding:10

    },

     midContainer:{
       justifyContent:'space-around'
     },

     leftContainer:{
        flexDirection:'row'
    },
    image:{
       marginRight:10,
    },
     lastMessage:{
        color:'grey',
        fontSize:16
     },    
     time:{
        color:'grey',
        fontSize:16
     }, 
})

const Container=styled.View`

  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  padding:10px
`

const Label = styled(Text)`
  margin: 10px 0;
`;