import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../components/util';

export const RentalsListScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>Rentals List Screen</Text>
    </Container>
  );
};

export default RentalsListScreen;
