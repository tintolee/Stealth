import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  AmenitiesScreen,
  SelectAddressScreen,
  SelectTypeScreen,
  UnitsScreen,
} from '../../../screens/rentals/add-rental-wizard';
// import { SelectTypeScreen } from '../../../screens/rentals/add-rental-wizard';
// import { SignInScreen, AuthLanding } from '../screens/access';
// import { SignUpStack } from './auth';

const Stack = createNativeStackNavigator<WizardStackParamList>();

type WizardStackParamList = {
  SelectTypeScreen: undefined;
  UnitsScreen: undefined;
  SelectAddress: undefined;
  Amenities: undefined;
};

export const WizardStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SelectTypeScreen" component={SelectTypeScreen} />
      <Stack.Screen name="UnitsScreen" component={UnitsScreen} />
      <Stack.Screen name="SelectAddress" component={SelectAddressScreen} />
      <Stack.Screen name="Amenities" component={AmenitiesScreen} />
    </Stack.Navigator>
  );
};

export default WizardStack;
