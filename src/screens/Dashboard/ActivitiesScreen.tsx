import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../components/util';

export const ActivitiesScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>Activities Screen</Text>
    </Container>
  );
};

export default ActivitiesScreen;
