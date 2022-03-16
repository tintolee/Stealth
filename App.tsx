import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './src/stacks';

// Import the functions you need from the SDKs you need

const AppStack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const App = (): JSX.Element => {
  return <AppContainer />;
};
export default App;
