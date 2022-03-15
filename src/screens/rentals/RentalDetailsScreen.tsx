import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../components/util';
import ProfileScreen from '../../components/TenantProfile';


export const RentalDetailsScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>Rental Detail Screen</Text>
    </Container>
  );
};

export default RentalDetailsScreen;
