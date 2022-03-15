import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Questions } from '../screens/access';

const Stack = createNativeStackNavigator<MainParamList>();

type MainParamList = {
  Questions: undefined;
};

export const Main: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Questions" component={Questions} />
    </Stack.Navigator>
  );
};

export default Main;
