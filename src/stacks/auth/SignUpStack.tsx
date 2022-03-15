import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  AddInfoScreen,
  EmailVerifyScreen,
  TermsScreen,
  VerifyPincodeScreen,
} from '../../screens/access/signup';

const Stack = createNativeStackNavigator<SignUpStackParamList>();

export type SignUpStackParamList = {
  EmailVerify: undefined;
  AddInfo: undefined;
  Terms: undefined;
  PincodeVerify: undefined;
};

export const SignUpStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EmailVerify" component={EmailVerifyScreen} />
      <Stack.Screen name="AddInfo" component={AddInfoScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="PincodeVerify" component={VerifyPincodeScreen} />
    </Stack.Navigator>
  );
};

export default SignUpStack;
