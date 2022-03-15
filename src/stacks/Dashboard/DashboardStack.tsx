import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ActivitiesScreen from '../../screens/Dashboard/ActivitiesScreen';
import ExpiringLeasesScreen from '../../screens/Dashboard/ExpiringLeasesScreen';
import RentalsApplicationScreen from '../../screens/Dashboard/RentalsApplicationsScreen';


const Stack = createNativeStackNavigator<DashBoardStackParamList>();

export type DashBoardStackParamList = {
  Activities: undefined;
  ExpiringLeases: undefined;
  RentalsApplication: undefined;
};

export const DashBoardStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Activities" component={ActivitiesScreen} />
      <Stack.Screen name="ExpiringLeases" component={ExpiringLeasesScreen} />
      <Stack.Screen name="RentalsApplication" component={RentalsApplicationScreen} />
      
    </Stack.Navigator>
  );
};

export default DashBoardStack;
