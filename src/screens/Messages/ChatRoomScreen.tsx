import React from 'react';
import { Container, Text } from '../../components/util';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../../components/chatMessage';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';

export const chatRoomScreen: React.FC = () => {

  const route=useRoute()

  
  
  return (
    <Container>
      <StatusBar backgroundColor="#f2636f" />  
     <Text> chat room with {route.params.name}</Text>
     
    </Container>
  );
};

export default chatRoomScreen;


