import React from 'react';

import {  DarkContainer, Text} from '../../components/util';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { MessageStackParamList } from '../../stacks/Messages/types';




export const NewMessagesScreen: React.FC<{
  scrollY: Animated.Value;
  screenTranslateY: Animated.AnimatedInterpolation;
}> = ({ scrollY, screenTranslateY }) => {
  const route = useRoute<RouteProp<MessageStackParamList, 'New Messages'>>();
  
  return (
    <MessageScreenContainer>
      <Text>New Messages</Text>
    </MessageScreenContainer>
  );
};

export default NewMessagesScreen;


const MessageScreenContainer = styled(DarkContainer)`
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
`;

const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
`;

const HeaderText = styled(Text)`
margin-top: 40px;
margin-bottom: 10px;
`;


const Scroll = styled.ScrollView`
  flex-grow: 0;
  margin-bottom: 5px;
`;
