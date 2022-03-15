import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Text } from '../../components/util';

export const ExpiringLeasesScreen: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#1e1e1e" />
      <Text>Expiring Leases Screen</Text>
    </Container>
  );
};

export default ExpiringLeasesScreen;
