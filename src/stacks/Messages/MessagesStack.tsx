import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {AllMessagesScreen} from '../../screens/Messages/AllMessagesScreen'
import {NewMessagesScreen} from '../../screens/Messages/NewMessagesScreen'



const Stack = createNativeStackNavigator<MessageStackParamLisT>();

type MessageStackParamLisT = {
    NewMessages: undefined;
    AllMessages: undefined;
   

};

export const MessagesStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewMessages" component={NewMessagesScreen} />
      <Stack.Screen name="AllMessages" component={AllMessagesScreen} />
     
    </Stack.Navigator>
  );
};

export default MessagesStack;
